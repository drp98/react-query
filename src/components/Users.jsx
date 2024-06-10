import React from 'react';
import { useGetUsers } from '../hooks/useGetUsers';
import { useDeleteUser } from '../hooks/useDeleteUser';

function Users({ setUserId }) {
  const { data, error, isFetching, isLoading, isError } = useGetUsers();
  const deleteUserMutation = useDeleteUser();

  const handleDelete = async (userId) => {
    await deleteUserMutation.mutateAsync(userId);
  };

  return (
    <div className='border p-5 m-3 w-[30rem] shadow-md rounded-lg'>
      <h1 className='text-center text-xl font-bold mb-4'>Users</h1>
      <div>
        {isLoading && 'Loading...'}

        {isError && `Error: ${ error.message }`}

        <>
          <div className='flex flex-col gap-2'>
            {data &&
              data.map((user) => (
                <div key={user.id} className='flex justify-between items-center'>
                  <button
                    onClick={() => setUserId(user.id)}
                    className='text-blue-500 cursor-pointer hover:underline'
                  >
                    {user.name}
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700'
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      </div>
    </div>
  );
}

export default Users;
