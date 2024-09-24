import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../services/CategoryService'

export const useGetCategory = () => {
  return useQuery({
    queryKey: ['GET_CATEGORIES'],
    queryFn: async () => await getCategories()
  })
}
