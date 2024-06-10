import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { endpoint } from '../config';

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const deleteUser = async (userId) => {
    return await axios.delete(`${endpoint}/${userId}`);
  };

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
}
