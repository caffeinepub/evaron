import { useActor } from './useActor';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error('Backend actor not available');
      await actor.submitContactForm(data.name, data.email, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-forms'] });
    },
  });
}
