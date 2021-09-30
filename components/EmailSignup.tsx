import { ReactElement, useState, useRef, FormEventHandler } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { Input } from './Input';
import { Button } from './Button';

interface Props {
  buttonPosition?: 'left' | 'center' | 'right';
  classes?: string;
}

export default function EmailSignup(props: Props): ReactElement {
  const { buttonPosition = 'center', classes } = props;
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const setButtonText = (value: string) => {
    if (null !== buttonRef.current) {
      buttonRef.current.innerText = value;
    }
  };
  const [email, setEmail] = useState('');
  const handleSubscription: FormEventHandler = async event => {
    event.preventDefault();
    setButtonText('Subscribing...');
    let response;
    try {
      response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
    } catch (error) {
      response = error;
    }
    switch (response?.status) {
      case 201:
        setEmail('');
        setButtonText('Signed up ✓');
        break;
      case 400:
      default:
        setButtonText('Signup failed ✗');
        break;
    }
  };

  const buttonStyles = [
    buttonPosition === 'left' && 'ml-0 mr-auto',
    buttonPosition === 'center' && 'mx-auto',
    buttonPosition === 'right' && 'mr-0 ml-auto',
  ];

  return (
    <div
      id="signup"
      className={classNames(
        'bg-alt border-2 border-solid border-primary p-6 mt-6 mb-10',
        'tablet:mx-auto tablet:py-4 tablet:px-12 tablet:mt-6 tablet:mb-8',
        'desktop:py-6 desktop:px-14',
        router.asPath !== '/get-involved' ? 'tablet:w-full' : 'tablet:w-4/5',
        classes,
      )}
    >
      <h3
        className={classNames(
          'text-2xl font-semibold leading-none mb-2',
          'tablet:text-3xl',
          'desktop:text-4xl desktop:mb-3',
        )}
      >
        You&apos;ve got mail!
      </h3>
      <p
        className={classNames(
          'leading-none mb-6',
          'tablet:mb-3 tablet:leading-tight',
          'desktop:mb-6 desktop:text-xl',
        )}
      >
        Sign up to our newsletter to keep up to date with everything Oxen.
      </p>
      <form onSubmit={handleSubscription}>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onValueChange={value => setEmail(value)}
          size={'large'}
          border={'primary'}
          inputMode={'text'}
          className={classNames(
            'mb-6 rounded-sm',
            'tablet:mb-4',
            'desktop:mb-6',
          )}
          required
        />
        <Button
          color="primary"
          size="medium"
          className={classNames(buttonStyles, 'tablet:w-40')}
          buttonType={'submit'}
          reference={buttonRef}
        >
          Sign up
        </Button>
      </form>
    </div>
  );
}
