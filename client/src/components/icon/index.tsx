import React from 'react';
import * as Muicon from '@mui/icons-material';

type NextImageProps = { name: any };

const Icon = ({ name, ...rest }: NextImageProps) => {
  /* @ts-ignore */
  const IconComponent = Muicon[name];
  return IconComponent ? (
    <div className='ml-2 content-center'>
      <IconComponent {...rest} />
    </div>
  ) : null;
};

export default React.memo(Icon);
