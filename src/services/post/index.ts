'use server'

import axiosInstance from '@/src/lib/AxiosInstance'
import { revalidateTag } from 'next/cache'

export const createPost = async (formData: FormData) => {
  try {
    const { data } = await axiosInstance.post('/items', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    revalidateTag('posts')
    return data
  } catch (error: any) {
    throw new Error(error.message)
  }
}
