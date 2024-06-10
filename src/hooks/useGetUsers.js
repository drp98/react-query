import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { endpoint } from '../config';

export function useGetUsers() {
  const getUsers = async (userId) => {
    const { data } = await axios.get(endpoint);
  
    return data;
  }

  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
}
