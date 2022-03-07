
import json
import logging
import os
from collections import OrderedDict
from pathlib import Path
from typing import Any, Dict, Optional, Union

from integration.data import Scalar
from integration.utils import nested_update

logger = logging.getLogger(__name__)


class Live:
    DEFAULT_DIR = "dump_model"

    def __init__(
        self, path: Optional[str] = None, resume: bool = False, **kwargs
    ):

        summary = kwargs.get("summary", True)
        
        if resume and not summary:
            raise ValueError("`resume` can't be used without `summary`")

        self._path: Optional[str] = path
        self._resume: bool = resume
        self._summary: bool = summary
        self._html: bool = True
        self._checkpoint: bool = False

        self.init_from_env()

        if self._path is None:
            self._path = self.DEFAULT_DIR

        self._step: Optional[int] = None
        self._scalars: Dict[str, Any] = OrderedDict()
        self._images: Dict[str, Any] = OrderedDict()
        self._plots: Dict[str, Any] = OrderedDict()

        if self._resume:
            self._step = self.read_step()
            if self._step != 0:
                self._step += 1
        else:
            self._init_paths()

    @property
    def dir(self):
        return self._path

    @property
    def isexists(self):
        return os.path.isdir(self.dir)

    @property
    def summary_path(self):
        return str(self.dir) + ".json"

    def _init_paths(self):
        if self._step is not None:
            os.makedirs(self.dir, exist_ok=True)
            if self._html:
                os.makedirs(Path(self.html_path).parent, exist_ok=True)
        if self._summary:
            os.makedirs(Path(self.summary_path).parent, exist_ok=True)
            self.make_summary()

    def init_from_env(self) -> None:
        DVCLIVE_PATH = "DVCLIVE_PATH"
        DVCLIVE_SUMMARY = "DVCLIVE_SUMMARY"
        DVCLIVE_HTML = "DVCLIVE_HTML"
        DVCLIVE_RESUME = "DVCLIVE_RESUME"
        DVC_CHECKPOINT = "DVC_CHECKPOINT"

        if DVCLIVE_PATH in os.environ:

            if self.dir and self.dir != os.environ[DVCLIVE_PATH]:
                pass

            env_config = {
                "_path": os.environ.get(DVCLIVE_PATH),
                "_summary": bool(
                    int(os.environ.get(DVCLIVE_SUMMARY, "0"))
                ),
                "_html": bool(int(os.environ.get(DVCLIVE_HTML, "0"))),
                "_checkpoint": bool(
                    int(os.environ.get(DVC_CHECKPOINT, "0"))
                ),
                "_resume": bool(int(os.environ.get(DVCLIVE_RESUME, "0"))),
            }
            for k, v in env_config.items():
                if getattr(self, k) != v:
                    logger.info(
                        f"Overriding {k} with value provided by DVC: {v}"
                    )
                    setattr(self, k, v)

    def log(self, name: str, val: Union[int, float]):
        if not Scalar.could_log(val):
            pass

        if name in self._scalars:
            data = self._scalars[name]
        else:
            data = Scalar(name, self.dir)
            self._scalars[name] = data

        data.dump(val, self._step)

        if self._summary:
            self.make_summary()


    def make_summary(self):
        summary_data = {}
        if self._step is not None:
            summary_data["step"] = self.get_step()

        for data in self._scalars.values():
            summary_data = nested_update(summary_data, data.summary)

        with open(self.summary_path, "w") as f:
            json.dump(summary_data, f, indent=4)



