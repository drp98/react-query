import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { endpoint } from '../config';

export function useGetUser(userId) {
  const getUser = async (userId) => {
    const { data } = await axios.get(`${endpoint}/${userId}`);
  
    return data;
  }

  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
    enabled: !!userId,
  });
}
