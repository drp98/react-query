import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import User from './components/User';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';

const queryClient = new QueryClient();

function App() {
  const [userId, setUserId] = React.useState(1);

  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-col p-5'>
        <div className='flex'>
          <Users setUserId={setUserId} />
          {userId > -1 && <User userId={userId} setUserId={setUserId} />}
        </div>
        <AddUserForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;
