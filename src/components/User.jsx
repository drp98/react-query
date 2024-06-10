import React from 'react';
import { useGetUser } from '../hooks/useGetUser';
import UserInfo from './UserInfo';

function User({ userId }) {
  const { data, error, isFetching, isLoading, isError } = useGetUser(userId);

  return (
    <div className='border p-5 m-3 w-[30rem] shadow-md rounded-lg bg-white'>
      {isLoading && 'Loading...'}

      {isError && (
        <div className='text-red-500'>
          Error: {error.message}
        </div>
      )}

      {data && (
        <>
          <img 
            src={data.avatar} 
            alt={`${data.name}'s avatar`} 
            className='w-24 h-24 rounded-full mx-auto mb-4'
          />
          <h1 className='text-center text-xl font-bold mb-4'>{data.name}</h1>
          <div className='text-center text-gray-500 mb-4'>@{data.username}</div>

          <UserInfo label="Email" value={data.email} />
          <UserInfo label="Birthday" value={new Date(data.birthday).toLocaleDateString()} />
          <UserInfo label="Job" value={data.job} />
          <UserInfo label="Phone" value={data.phone} />

          <div className='text-center text-blue-500'>
            {isFetching ? 'Background Updating...' : ''}
          </div>
        </>
      )}
    </div>
  );
}

export default User;
