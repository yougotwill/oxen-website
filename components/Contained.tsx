import React, { ReactNode } from 'react';

import { UI } from '@/constants';
import classNames from 'classnames';

interface Props {
  id?: string;
  backgroundColor?: 'primary' | 'secondary' | 'alt' | 'white';
  ditherColor?: 'alt' | 'secondary';
  ditherPosition?: 'top' | 'bottom' | 'top bottom';
  ditherFlipAxis?: 'x' | 'y';
  fullWidth?: boolean;
  classes?: string;
  children: ReactNode;
}

export const containerStyles = {
  paddingLeft: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
  paddingRight: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
  maxWidth: `${UI.MAX_CONTENT_WIDTH}px`,
};

export function Contained(props: Props) {
  const {
    id,
    backgroundColor,
    ditherColor,
    ditherPosition,
    ditherFlipAxis,
    fullWidth = false,
    classes,
    children,
  } = props;

  const backgroundColorClasses = [
    backgroundColor === 'primary' && 'bg-primary',
    backgroundColor === 'secondary' && 'bg-secondary',
    backgroundColor === 'alt' && 'bg-alt',
    backgroundColor === 'white' && 'bg-white',
    ditherColor === 'alt' && 'bg-dithered-alt bg-no-repeat',
    ditherColor === 'secondary' && 'bg-dithered-secondary bg-no-repeat',
    ditherFlipAxis === 'x' && 'transform -scale-x-1',
    ditherFlipAxis === 'y' && 'transform -scale-y-1',
    ditherFlipAxis === 'y' && ditherPosition === 'top' && 'bg-bottom',
    ditherFlipAxis === 'y' && ditherPosition === 'bottom' && 'bg-top',
    !ditherFlipAxis && ditherPosition === 'top' && 'bg-top',
    !ditherFlipAxis && ditherPosition === 'bottom' && 'bg-bottom',
    ditherPosition === 'top bottom' && 'bg-top bg-bottom',
  ];

  return (
    <div className={classNames('w-full', backgroundColorClasses)}>
      <div
        id={id}
        className={classNames(
          'w-full my-0 mx-auto',
          ditherFlipAxis === 'x' && 'transform -scale-x-1',
          ditherFlipAxis === 'y' && 'transform -scale-y-1',
          classes,
        )}
        style={{
          paddingLeft: !fullWidth
            ? `${UI.PAGE_CONTAINED_PADDING_VW}vw`
            : undefined,
          paddingRight: !fullWidth
            ? `${UI.PAGE_CONTAINED_PADDING_VW}vw`
            : undefined,
          maxWidth: !fullWidth ? `${UI.MAX_CONTENT_WIDTH}px` : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
}
