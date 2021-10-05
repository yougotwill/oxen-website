import { ReactElement, useState, useRef, FormEventHandler } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { Input } from './Input';
import { Button } from './Button';

interface Props {
  buttonAlign?: 'left' | 'center' | 'right';
  textAlign?: 'left' | 'center' | 'right';
  backgroundColor?: 'primary' | 'alt' | 'secondary' | 'white';
  border?: boolean;
  classes?: string;
}

export default function EmailSignup(props: Props): ReactElement {
  const {
    buttonAlign = 'center',
    textAlign = 'left',
    backgroundColor = 'alt',
    border = true,
    classes,
  } = props;
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
        setButtonText('Signup error ✗');
        break;
    }
  };

  const buttonStyles = [
    buttonAlign === 'left' && 'ml-0 mr-auto',
    buttonAlign === 'center' && 'mx-auto',
    buttonAlign === 'right' && 'mr-0 ml-auto',
  ];

  const textStyles = [
    textAlign === 'left' && 'text-left',
    textAlign === 'center' && 'text-center',
    textAlign === 'right' && 'text-right',
  ];

  const backgroundStyles = [
    backgroundColor === 'primary' && 'bg-primary',
    backgroundColor === 'alt' && 'bg-alt text-primary',
    backgroundColor === 'secondary' && 'bg-secondary',
    backgroundColor === 'white' && 'bg-white text-primary',
  ];

  return (
    <div
      id="signup"
      className={classNames(
        'p-12 pb-10',
        'tablet:mx-auto tablet:pt-10 tablet:pb-12 tablet:px-12',
        'desktop:pt-12 desktop:pb-6 desktop:px-14',
        router.asPath !== '/get-involved' ? 'tablet:w-full' : 'tablet:w-4/5',
        border && 'border-2 border-solid border-primary',
        backgroundStyles,
        textStyles,
        classes,
      )}
    >
      <h3
        className={classNames(
          'text-2xl leading-tight mb-4',
          'tablet:text-3xl',
          'desktop:text-2xl',
        )}
      >
        Join the movement and help defend privacy in the digital world.
      </h3>
      <p
        className={classNames(
          'font-light leading-tight mb-6',
          'tablet:mb-3 tablet:leading-tight',
        )}
      >
        Sign up to the mailing list and start taking action!
      </p>
      <form
        className={classNames('desktop:flex desktop:items-center')}
        onSubmit={handleSubscription}
      >
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onValueChange={value => setEmail(value)}
          size={'large'}
          borderColor={'white'}
          borderStyle={'round'}
          inputMode={'text'}
          inputClassName={'placeholder-white placeholder-opacity-80'}
          className={classNames(
            'text-white mb-6 rounded-sm',
            'tablet:mt-4 tablet:mb-5 tablet:max-w-sm',
            textAlign === 'center' && 'tablet:mx-auto',
            'desktop:w-7/12 desktop:mr-4',
          )}
          required
        />
        <Button
          color="secondary"
          shape={'round'}
          size="wide"
          className={classNames(buttonStyles)}
          buttonType={'submit'}
          reference={buttonRef}
        >
          Sign up
        </Button>
      </form>
    </div>
  );
}
