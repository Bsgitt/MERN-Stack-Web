import React from "react";
import { useForm } from "react-hook-form";
export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className='justify-center'>
      <h1>Regiser</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='form-control'
            name='name'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname'>lastName</label>
          <input
            type='text'
            className='form-control'
            name='lastName'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='form-control'
            name='email'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            ref={register}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}
