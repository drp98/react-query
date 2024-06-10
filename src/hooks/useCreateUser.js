import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { endpoint } from '../config';

export function useCreateUser() {
  const queryClient = useQueryClient();

  const createUser = async (newUser) => {
    return await axios.post(endpoint, newUser);
  };

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
}
