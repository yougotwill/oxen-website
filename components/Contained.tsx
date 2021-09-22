import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { UI } from '../constants';

interface Props {
  id?: string;
  backgroundColor?: 'primary' | 'secondary' | 'alt' | 'secondary-1';
  classes?: string;
  children: ReactNode;
}

export function Contained(props: Props) {
  const { id, backgroundColor, classes, children } = props;

  const containerStyle = {
    paddingLeft: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
    paddingRight: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
    width: '100%',
    maxWidth: `${UI.MAX_CONTENT_WIDTH}px`,
    margin: '0 auto',
  };

  const backgroundColorClasses = [
    backgroundColor === 'primary' && 'bg-primary',
    backgroundColor === 'secondary' && 'bg-secondary',
    backgroundColor === 'alt' && 'bg-alt',
    backgroundColor === 'primary' && 'bg-secondary-1',
  ];

  return (
    <div className={classNames('w-screen', backgroundColorClasses)}>
      <div
        id={id}
        className={classNames('w-full', classes)}
        style={containerStyle}
      >
        {children}
      </div>
    </div>
  );
}
