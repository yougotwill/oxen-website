import About from '../../components/products/session/About';
import Benefits from '../../components/products/session/Benefits';
import CallToAction from '../../components/products/session/CallToAction';
import Hero from '../../components/products/session/Hero';
import { ReactElement } from 'react';
import Video from '../../components/products/session/Video';
import classNames from 'classnames';

export interface Props {}

export default function Session(props: Props): ReactElement {
  const {} = props;

  return (
    <div className={classNames('relative bg-alt')}>
      <Hero />
      <About />
      <Video />
      <Benefits />
      <CallToAction />
    </div>
  );
}
