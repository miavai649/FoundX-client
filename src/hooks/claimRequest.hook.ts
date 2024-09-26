import { useMutation } from '@tanstack/react-query'
import { addClaimRequest } from '../services/ClaimRequest'
import { FieldValues } from 'react-hook-form'
import { toast } from 'sonner'

export const useClaimRequest = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ['CLAIM_REQUEST'],
    mutationFn: async (postData) => await addClaimRequest(postData),
    onSuccess: () => {
      toast.success('Claim Request Created Successfully')
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })
}
