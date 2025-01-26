import styles from './ParticipantForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerParticipant } from '../../redux/cards/operationsCards.js';
import { toast } from 'react-toastify';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';

const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
const phoneNumberRegExp = /^\+?[\d\s-]{7,15}$/;

const participantSchema = yup.object({
  question: yup.string().required('Please select an option!'),
  fullname: yup.string().required('Name is required!'),
  email: yup
    .string()
    .required('Email is required!')
    .matches(emailRegExp, 'Email is not valid.')
    .email('Email is not valid.'),
  phoneNumber: yup
    .string()
    .required('Phone number is required!')
    .matches(
      phoneNumberRegExp,
      'The phone number format +XX XXXXX XXXXX. Must contain hyphens and spaces.'
    ),
});

const ParticipantForm = ({ card }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const socialMediaId = useId();
  const friendsId = useId();
  const myselfId = useId();
  const fullnameId = useId();
  const emailId = useId();
  const phoneNumberId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(participantSchema),
    defaultValues: {
      question: '',
      fullname: '',
      email: '',
      phoneNumber: '',
    },
  });

  const onSubmit = data => {
    if (!isLoggedIn) {
      toast.info('Register in the app first to join the event!', {
        position: 'top-center',
      });
      navigate('/register-user');
      return;
    }

    dispatch(registerParticipant({ ...data, cardID: card.id }))
      .unwrap()
      .then(() => {
        toast.success('Register request sent!', {
          position: 'top-center',
        });
        navigate('/cards');
      })
      .catch(() => {
        toast.error('Error. Try again later.', {
          position: 'top-center',
        });
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title} id="register-title">
          Participant registration
        </h3>
        <p className={styles.text} id="register-description">
          To register for the event, please answer a few questions.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={card.organizer.avatar_url}
          alt={`${card.organizer.full_name}`}
          className={styles.image}
        />
        <div className={styles.imageTextWrapper}>
          <h6 className={styles.imageTitle}> Event organizer</h6>
          <p className={styles.imageText}>{`${card.organizer.full_name}`}</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        aria-labelledby="register-title"
        aria-describedby="register-description"
      >
        <div className={styles.fieldsetWrapper}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              Where did you hear about this event?
            </legend>

            <div className={styles.radioWrapper}>
              <>
                <div className={styles.inputWrapper}>
                  <input
                    {...register('question')}
                    type="radio"
                    value="SocialMedia"
                    id={socialMediaId}
                    className={styles.radio}
                    aria-labelledby={`social-media`}
                  />
                  <label
                    htmlFor={socialMediaId}
                    className={styles.label}
                    id={`social-media`}
                  >
                    Social Media
                  </label>
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    {...register('question')}
                    type="radio"
                    value="friends"
                    id={friendsId}
                    className={styles.radio}
                    aria-labelledby={`friends-label`}
                  />
                  <label
                    htmlFor={friendsId}
                    className={styles.label}
                    id={`friends-label`}
                  >
                    Friends
                  </label>
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    {...register('question')}
                    type="radio"
                    value="myself"
                    id={myselfId}
                    className={styles.radio}
                    aria-labelledby={`myself-label`}
                  />
                  <label
                    htmlFor={myselfId}
                    className={styles.label}
                    id={`myself-label`}
                  >
                    Myself
                  </label>
                </div>
              </>
            </div>
          </fieldset>

          <p className={styles.errorText}>{errors.question?.message}</p>
        </div>

        <div className={styles.userInfo}>
          <div className={styles.nameWrapper}>
            <label htmlFor={fullnameId} className={styles.label}>
              Full name
            </label>
            <input
              id={fullnameId}
              {...register('fullname')}
              className={styles.input}
              placeholder="Full name"
              aria-required="true"
            />
            <p className={styles.errorText}>{errors.fullname?.message}</p>
          </div>

          <div className={styles.emailWrapper}>
            <label htmlFor={emailId} className={styles.label}>
              Email
            </label>
            <input
              id={emailId}
              {...register('email')}
              className={styles.input}
              placeholder="Email"
              autoComplete="email"
              aria-required="true"
            />
            <p className={styles.errorText}>{errors.email?.message}</p>
          </div>

          <div className={styles.dateWrapper}>
            <label htmlFor={phoneNumberId} className={styles.label}>
              Phone number
            </label>
            <input
              id={phoneNumberId}
              {...register('phoneNumber')}
              className={styles.input}
              placeholder="Phone number"
              aria-required="true"
            />
            <p className={styles.errorText}>{errors.phoneNumber?.message}</p>
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          aria-label="register"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default ParticipantForm;
