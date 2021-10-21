import About from '../../components/products/session/About';
import CallToAction from '../../components/products/session/CallToAction';
import Hero from '../../components/products/session/Hero';
import { ReactElement } from 'react';
import classNames from 'classnames';

export interface Props {}

export default function Session(props: Props): ReactElement {
  const {} = props;

  return (
    <div className={classNames('relative bg-alt')}>
      <Hero />
      <About />
      {/* <Video /> */}
      {/* <Benefits /> */}
      <CallToAction />
    </div>
  );
}
