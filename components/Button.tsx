import classNames from 'classnames';
import React, { LegacyRef } from 'react';
import { useScreen } from '../contexts/screen';

export interface Props {
  color?: 'primary' | 'secondary' | 'danger' | 'white';
  type?: 'text' | 'ghost' | 'solid' | 'outline';
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'wide';
  shape?: 'round' | 'semiround' | 'square';
  fontWeight?: 'normal' | 'semibold' | 'bold';
  disabled?: boolean;
  selected?: boolean;
  buttonType?: 'submit';
  reference?: LegacyRef<HTMLButtonElement>;
  onClick?(): any;
  children?: string;
  className?: string;

  // Icons
  prefix?: JSX.Element;
  suffix?: JSX.Element;

  wideText?: boolean;
}

export function Button(props: Props) {
  const {
    color = 'primary',
    size = 'medium',
    shape = 'square',
    fontWeight = 'normal',
    type = 'solid',
    disabled = false,
    selected = false,
    buttonType,
    reference,
    onClick,
    children,
    className,
    prefix,
    suffix,
    wideText = false,
  } = props;

  const { isDesktop, isHuge } = useScreen();

  const clickHandler = (e: React.MouseEvent) => {
    if (onClick) {
      e?.stopPropagation && e?.stopPropagation();
      onClick();
    }
  };

  const onClickFn = disabled ? () => null : clickHandler;

  const ghostClassNames = [
    'bg-transparent',
    `hover:bg-${color}`,
    'bg-transparent',
    selected && `bg-white`,
    selected ? 'text-white' : `text-${color}`,
  ];

  const solidClassNames = [
    'text-white',
    `bg-${color}`,
    'hover:opacity-75',
    selected && 'bg-opacity-75',
  ];

  const outlineClassNames = ['py-2'];

  const textTypeClassNames = [`text-${color}`, 'hover:opacity-75'];

  const off = disabled
    ? ['cursor-not-allowed', 'opacity-50']
    : ['cursor-pointer'];

  // Conditional isDesktop makes buttons more touch friendly
  // with more padding
  const sizeStyles = [
    size === 'large' && 'text-lg py-2 px-8',
    size === 'medium' && 'text-base py-1 px-8',
    size === 'small' && ['text-sm px-8', isDesktop || isHuge ? 'py-0' : 'py-1'],
    size === 'tiny' && 'text-xs py-0 px-8',
    size === 'wide' && 'py-1 px-12',
  ];

  const shapeStyles = [
    shape === 'round' && 'rounded-3xl',
    shape === 'semiround' && 'rounded-lg',
    shape === 'square' && 'rounded-none',
  ];

  const fontStyles = [
    'font-raleway',
    fontWeight === 'normal' && 'font-normal',
    fontWeight === 'semibold' && 'font-semibold',
    fontWeight === 'bold' && 'font-bold',
  ];

  // Make bg crop to text with tailwind on gradient
  // https://tailwindcss.com/docs/background-clip#class-reference

  // prettier-ignore
  const typeStyles = 
    type === 'ghost' ? ghostClassNames :
    type === 'solid' ? solidClassNames :
    type === 'text' ? textTypeClassNames :
    type === 'outline' ? outlineClassNames :
    '';

  return (
    <button
      className={classNames(
        'flex',
        'justify-center',
        'items-center',
        'outline-none',
        'duration-300',
        'ease-in-out',
        'text-center',
        off,
        sizeStyles,
        shapeStyles,
        fontStyles,
        typeStyles,
        wideText && 'tracking-widest',
        !disabled && type !== 'text' && 'hover:text-white',
        type !== 'text' && ['border-2', 'border-solid', `border-${color}`],
        className,
      )}
      tabIndex={-1}
      type={buttonType}
      ref={reference}
      onClick={onClickFn}
    >
      {prefix && (
        <div className={classNames('flex', 'items-center', children && 'pr-2')}>
          {prefix}
        </div>
      )}
      {children}
      {suffix && (
        <div className={classNames('flex', 'items-center', children && 'pl-2')}>
          {suffix}
        </div>
      )}
    </button>
  );
}
