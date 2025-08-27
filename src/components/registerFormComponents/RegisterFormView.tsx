import { useState } from 'react';
import { AppBtn } from '../../commons/AppBtn';

type FormData = {
  login: string;
  email: string;
  password: string;
};

export const RegisterFormView = () => {
  const [form, setForm] = useState<FormData>({
    login: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration:', form);
    // Здесь можно отправить данные на API
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-10 p-6 bg-white shadow rounded space-y-4'>
      <h2 className='text-2xl font-bold text-center'>Registration</h2>

      <input
        type='text'
        name='login'
        placeholder='Login'
        value={form.login}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        required
      />

      <input
        type='email'
        name='email'
        placeholder='Email'
        value={form.email}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        required
      />

      <input
        type='password'
        name='password'
        placeholder='Password'
        value={form.password}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        required
      />
      <div className='flex justify-center items-center w-full'>
        <AppBtn text='Registration' typeVal='submit' />
      </div>
    </form>
  );
};
