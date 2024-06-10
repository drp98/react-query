import React, { useState } from 'react';
import { useCreateUser } from '../hooks/useCreateUser';
import Input from './Input';

function AddUserForm() {
  const mutation = useCreateUser();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      name: formData.name,
      email: formData.email,
    };

    await mutation.mutateAsync(newUser);
  };

  return (
    <div className='mt-5 p-5 border rounded-lg shadow-md w-[30rem]'>
      <h2 className='text-center text-xl font-bold mb-4'>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <Input label='Name' type='text' name='name' value={formData.name} onChange={handleChange} required />
        <Input label='Email' type='email' name='email' value={formData.email} onChange={handleChange} required />

        <button type='submit' className='submit-button bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 w-full mt-2'>
          Add User
        </button>

        {mutation.isError && (
          <div className='text-red-500 mt-2'>Error: {mutation.error.message}</div>
        )}

        {mutation.isSuccess && (
          <div className='text-green-500 mt-2'>User added successfully!</div>
        )}
      </form>
    </div>
  );
}

export default AddUserForm;
