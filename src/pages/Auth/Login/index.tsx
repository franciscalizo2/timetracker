import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import classes from './login.module.css';

type FormValues = {
  username: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('data', data);

    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes['page-container']}>
        <div className={classes['form-container']}>
          <h2 className={classes['title']}>Welcome!</h2>
          <p className={classes['sign-in-text']}>
            Please sign in to your account
          </p>
          <div className={classes['grid-container']}>
            <div className={classes['input-container']}>
              <input
                className={classes['input']}
                type="text"
                placeholder="Username"
                {...register('username', {
                  required: 'This field is required',
                })}
              />
              {errors.username && (
                <div className={classes['error-message']}>
                  {errors.username.message}
                </div>
              )}
            </div>

            <div className={classes['input-container']}>
              <input
                className={classes['input']}
                type="password"
                placeholder="Password"
                {...register('password', {
                  required: 'This field is required',
                })}
              />
              {errors.password && (
                <div className={classes['error-message']}>
                  {errors.password.message}
                </div>
              )}
            </div>
            <Link to="/forgot-password" className={classes['forgot-password']}>
              Forgot your password?
            </Link>

            <button className={classes['login-button']}>Login</button>
          </div>
        </div>
      </div>
    </form>
  );
}
