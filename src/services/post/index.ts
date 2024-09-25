'use server'

import axiosInstance from '@/src/lib/AxiosInstance'

export const createPost = async (formData: FormData) => {
  try {
    const { data } = await axiosInstance.post('/items', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    return data
  } catch (error: any) {
    throw new Error(error.message)
  }
}
