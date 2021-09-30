import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { UI } from '../constants';

interface Props {
  id?: string;
  backgroundColor?: 'primary' | 'secondary' | 'alt' | 'white';
  classes?: string;
  children: ReactNode;
}

export const containerStyles = {
  paddingLeft: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
  paddingRight: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
  maxWidth: `${UI.MAX_CONTENT_WIDTH}px`,
};

export function Contained(props: Props) {
  const { id, backgroundColor, classes, children } = props;

  const backgroundColorClasses = [
    backgroundColor === 'primary' && 'bg-primary',
    backgroundColor === 'secondary' && 'bg-secondary',
    backgroundColor === 'alt' && 'bg-alt',
    backgroundColor === 'white' && 'bg-white',
  ];

  return (
    <div className={classNames('w-full', backgroundColorClasses)}>
      <div
        id={id}
        className={classNames('w-full my-0 mx-auto', classes)}
        style={containerStyles}
      >
        {children}
      </div>
    </div>
  );
}
