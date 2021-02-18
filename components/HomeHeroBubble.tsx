import classNames from 'classnames';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ScreenContext } from '../contexts/screen';
import { expandSideMenu } from '../state/navigation';

export function HomeHeroBubble() {
  const { isMobile, isTablet, isHuge } = useContext(ScreenContext);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        transform:
          isMobile || isTablet
            ? 'translateY(-40vh)'
            : isHuge
            ? 'translateY(-40vh)'
            : 'translateY(-50vh)',
      }}
      onClick={() => dispatch(expandSideMenu())}
      className="absolute bottom-0 z-40 px-10 duration-300"
    >
      <div
        className={classNames(
          'px-4 py-2  leading-tight  text-base border rounded-lg bg-opacity-90 border-secondary bg-alt front-prompt text-primary animate-float',
          //   isMobile ? 'text-base' : 'text-xl',
        )}
      >
        <p className="mb-1 text-xs text-secondary">OXEN</p>
        Welcome to Oxen.
        <br />
        We know you have questions;
        <br /> here are the answers.
      </div>
    </div>
  );
}