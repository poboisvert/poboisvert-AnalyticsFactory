from xgboost.callback import TrainingCallback
from integration.live import Live


class LiveCallback(TrainingCallback):
    def __init__(self, model_file=None, **kwargs):
        super().__init__()
        self.model_file = model_file
        self.storage = Live(**kwargs)

    def _get_key(self, data, metric):
        return f'{data}-{metric}'

    def after_iteration(self, model, epoch, evals_log):
        for key, values in evals_log.items():
            self.storage.log(key, values)