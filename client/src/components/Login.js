import React from "react";
import { useForm } from "react-hook-form";
export default function Login() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>Login</h1>
      <div className='group-row'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <label htmlFor='email'>email</label>
            <input
              type='email'
              className='form-control'
              name='email'
              ref={register}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              ref={register}
            />
          </div>
          <button className='btn badge-success'>Log in</button>
        </form>
      </div>
    </div>
  );
}
