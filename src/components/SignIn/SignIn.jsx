import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './SignIn.module.css';
import { useId, useState } from 'react';
import clsx from 'clsx';
import Icon from '../Icon/Icon.jsx';
import eyeIcon from '../../assets/icons/eye.svg';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operationsAuth.js';
const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

const minPasswordLength = 7;
const maxPasswordLength = 22;

const signInSchema = yup.object({
  email: yup
    .string()
    .required('Email is required!')
    .matches(emailRegExp, 'Email address is not valid')
    .email('Please enter a valid email address!'),

  password: yup
    .string()
    .required('Password is required!')
    .min(minPasswordLength, 'Too short')
    .max(maxPasswordLength, 'Too long'),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const [isPassword, setIsPassword] = useState(true);

  const emailId = useId();
  const passwordId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const togglePassword = () => setIsPassword(!isPassword);

  const onSubmit = async data => {
    dispatch(loginUser({ email: data.email, password: data.password }))
      .unwrap()
      .then(() =>
        toast.success('User logged in successfully!', {
          position: 'top-center',
        })
      )
      .catch(errMessage => {
        toast.error(errMessage, {
          position: 'top-center',
        });
      });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Log In</h2>
      <p className={styles.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an events.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        aria-labelledby="sign-in-title"
        aria-describedby="sign-in-description"
      >
        <div className={styles.emailWrapper}>
          <label htmlFor={emailId} className={styles.label}>
            Email
          </label>
          <input
            id={emailId}
            {...register('email')}
            placeholder="Email"
            autoComplete="email"
            className={clsx(styles.input, styles.email)}
            aria-required="true"
          />
          <p className={styles.errorText}>{errors.email?.message}</p>
        </div>

        <div className={styles.passwordWrapper}>
          <label htmlFor={passwordId} className={styles.label}>
            Password
          </label>
          <input
            id={passwordId}
            type={isPassword ? 'password' : 'text'}
            {...register('password', { required: true })}
            placeholder="Password"
            autoComplete="current-password"
            className={clsx(styles.input, styles.password)}
            aria-required="true"
          />
          <button
            type="button"
            onClick={togglePassword}
            className={styles.eyeButton}
            aria-label={isPassword ? 'Show password' : 'Hide password'}
          >
            {isPassword ? (
              <img src={eyeIcon} alt="eye icon" className={styles.eye} />
            ) : (
              <Icon
                id="eye"
                role="button"
                aria-label="hide password"
                width={20}
                height={20}
                className={styles.eye}
                fillColor="#121417"
                inert="false"
              />
            )}
          </button>
          {errors.password && (
            <p className={styles.errorText}>{errors.password?.message}</p>
          )}
        </div>

        <button type="submit" className={styles.buttonSign} aria-label="log in">
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
