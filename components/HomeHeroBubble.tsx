import { useScreen } from '@/contexts/screen';
import classNames from 'classnames';
import { expandSideMenu } from '@/state/navigation';
import { useDispatch } from 'react-redux';

export function HomeHeroBubble() {
  const { isMobile, isTablet, isDesktop, isHuge, isEnormous } = useScreen();
  const dispatch = useDispatch();

  return (
    <div
      style={{
        marginTop:
          isMobile || isTablet
            ? '33px'
            : isDesktop || isHuge || isEnormous
            ? '16rem'
            : 'min(50vh, 20rem)',
      }}
      onClick={() => dispatch(expandSideMenu())}
      className={classNames(
        'absolute z-40 px-4 tablet:px-6 duration-300 w-full h-full tablet:w-auto tablet:h-auto flex justify-center items-center tablet:flex-none',
        !(isDesktop || isHuge || isEnormous) && 'cursor-pointer',
      )}
    >
      <div
        className={classNames(
          'px-4 py-2 leading-tight text-base desktop:text-xl border rounded-lg bg-opacity-90 border-secondary bg-alt text-primary animate-float',
          // isMobile ? 'text-base' : 'text-xl',
        )}
      >
        <p className="mb-1 text-xs desktop:text-base text-secondary">OXEN</p>
        <h1>
          Welcome to Oxen.
          <br />
          We know you have questions;
          <br /> here are the answers.
        </h1>
      </div>
    </div>
  );
}
