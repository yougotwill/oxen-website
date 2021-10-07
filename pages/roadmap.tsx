import Image from 'next/image';
import classNames from 'classnames';

import { useScreen } from '../contexts/screen';
import { NAVIGATION, METADATA } from '../constants';
import { SideMenuItem } from '../state/navigation';

import CustomHead from '../components/CustomHead';
import { Contained } from '../components/Contained';

function Roadmap() {
  const { isMobile } = useScreen();
  const horizontal = !isMobile;
  const imageClasses = ['relative w-full max-w-7xl mx-auto'];

  return (
    <>
      <CustomHead
        title={NAVIGATION.SIDE_MENU_ITEMS[SideMenuItem.ROADMAP].label}
        metadata={METADATA.ROADMAP_PAGE}
      />
      <Contained classes={classNames('mb-12')}>
        <div className="flex items-center justify-center">
          <div className={classNames(imageClasses)} style={{ height: '90%' }}>
            <Image
              src={`/img/roadmap-${horizontal ? 'x' : 'y'}.png`}
              alt="Oxen's Roadmap and Plans for the future."
              width={horizontal ? '1920' : '700'}
              height={horizontal ? '1009' : '1615'}
              layout="responsive"
              quality={100}
            />
          </div>
        </div>

        <div className="flex flex-col pb-6">
          <div>
            <h2 className="my-6 text-3xl font-medium text-center tablet:text-4xl text-primary">
              Session in 2021
            </h2>
            <div
              className={classNames(imageClasses)}
              style={{ height: horizontal ? '90%' : 'auto' }}
            >
              <Image
                src={`/img/session-${horizontal ? 'x' : 'y'}.png`}
                alt="Session's Roadmap and Plans for the future."
                width={horizontal ? '17138' : '4688'}
                height={horizontal ? '9992' : '12009'}
                layout="responsive"
                quality={100}
                lazyBoundary={`500px 200px`}
                className="rounded-md"
              />
            </div>
          </div>

          <div>
            <h2 className="my-6 text-3xl font-medium text-center tablet:text-4xl text-primary">
              Lokinet in 2021
            </h2>
            <div className={classNames(imageClasses)} style={{ height: '90%' }}>
              <Image
                src={`/img/lokinet-${horizontal ? 'x' : 'y'}.png`}
                alt="Lokinet's Roadmap and Plans for the future."
                width={horizontal ? '8003' : '4688'}
                height={horizontal ? '3808' : '10150'}
                layout="responsive"
                quality={100}
                lazyBoundary={`500px 200px`}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </Contained>
    </>
  );
}

export default Roadmap;
