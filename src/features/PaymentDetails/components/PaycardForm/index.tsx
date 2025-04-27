import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { checkExapirationDate, validateFormField } from './utils';
import Button from '@mui/material/Button';
import { showNotification } from '@common/components/Message';
import { messageConfig } from '@common/components/Message/configs';
import Spinner from '@common/components/Spinner';

import './index.scss';

type FormFields = {
  cardNumber: string;
  expirationDate: string;
  cvc: string;
};

const PaycardForm: React.FC = () => {
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const submitButtonContentRef = useRef<HTMLDivElement>(null);
  const paymentContentRef = useRef<HTMLDivElement>(null);
  const processingContentRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      cardNumber: '',
      expirationDate: '',
      cvc: '',
    },
  });

  const onSubmit = async (data: FormFields) => {
    const { expirationDate } = data;
    const isExapirationDateValid = checkExapirationDate(expirationDate);
    if (!isExapirationDateValid) {
      setError('expirationDate', {
        message: 'The expiration date is invalid (enter in MM/YY format) or expired',
      });
      return;
    }

    //simulating form submitting to the server
    submitButtonContentRef?.current?.classList.add('paycard-form__submit-button-content-animation');
    paymentContentRef?.current?.classList.add('paycard-form__payment-content-animation');
    processingContentRef?.current?.classList.add('paycard-form__processing-content-animation');
    await new Promise(resolve =>
      setTimeout(() => {
        showNotification(messageConfig.success);
        reset();
        submitButtonContentRef?.current?.classList?.remove(
          'paycard-form__submit-button-content-animation',
        );
        paymentContentRef?.current?.classList.remove('paycard-form__payment-content-animation');
        processingContentRef?.current?.classList.remove(
          'paycard-form__processing-content-animation',
        );
        resolve(1);
      }, 2000),
    );
  };

  return (
    /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
    <form className="payment-actions__form paycard-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="paycard-form__label" htmlFor="cardNumber">
        Card Number
      </label>
      <input
        {...register('cardNumber', {
          required: 'This field is required',
          minLength: {
            value: 19,
            message: 'Here should be a valid card number (16 numbers)',
          },
          maxLength: 19,
          onChange(event: React.ChangeEvent<HTMLInputElement>) {
            setValue('cardNumber', validateFormField(event.target.value, 'cardNumber') ?? '');
          },
        })}
        id="cardNumber"
        placeholder="1234 1234 1234 1234"
        className="paycard-form__input"
        maxLength={19}
        disabled={isSubmitting}
      />
      {errors.cardNumber?.message && (
        <p className="paycard-form__error">{errors.cardNumber.message}</p>
      )}

      <div className="paycard-form__grouped-inputs">
        <div className="paycard-form__grouped-input">
          <label className="paycard-form__label" htmlFor="expirationDate">
            Expiration Date
          </label>
          <input
            {...register('expirationDate', {
              required: 'This field is required',
              minLength: {
                value: 5,
                message:
                  'Here should be a valid (4 numbers with MM/YY format) and current expiration date',
              },
              maxLength: 5,
              onChange(event: React.ChangeEvent<HTMLInputElement>) {
                if (event.target.value.length >= 5) return;
                setValue(
                  'expirationDate',
                  validateFormField(event.target.value, 'expirationDate') ?? '',
                );
              },
            })}
            id="expirationDate"
            placeholder="MM/YY"
            className="paycard-form__input"
            maxLength={5}
            disabled={isSubmitting}
          />
          {errors.expirationDate?.message && (
            <p className="paycard-form__error">{errors.expirationDate.message}</p>
          )}
        </div>

        <div className="paycard-form__grouped-input">
          <label className="paycard-form__label" htmlFor="cvc">
            CVC
          </label>
          <div className="paycard-form__input-with-badge-container">
            <input
              {...register('cvc', {
                required: 'This field is required',
                minLength: {
                  value: 3,
                  message: 'Here should be a valid CVC code (3 numbers)',
                },
                maxLength: 3,
                onChange(event: React.ChangeEvent<HTMLInputElement>) {
                  if (event.target.value.length >= 3) return;
                  setValue('cvc', validateFormField(event.target.value, 'cvc') ?? '');
                },
              })}
              type="password"
              id="cvc"
              placeholder="•••"
              className="paycard-form__input paycard-form__input-with-badge"
              maxLength={3}
              disabled={isSubmitting}
            />
            <div className="paycard-form__badge-container">
              <img src="/images/info-badge.png" alt="Info" className="paycard-form__badge" />
            </div>
          </div>
          {errors.cvc?.message && <p className="paycard-form__error">{errors.cvc.message}</p>}
        </div>
      </div>

      <Button variant="contained" type="submit" disabled={isSubmitting} ref={submitBtnRef}>
        <div className="paycard-form__submit-button-content" ref={submitButtonContentRef}>
          <div className="paycard-form__payment-content" ref={paymentContentRef}>
            Pay 299.99 UAH
          </div>
          <div className="paycard-form__processing-payment-container">
            <Spinner />
            <span className="paycard-form__processing-content" ref={processingContentRef}>
              Processing payment
            </span>
          </div>
        </div>
      </Button>
    </form>
  );
};

export default PaycardForm;
