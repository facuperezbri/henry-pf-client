import { useState } from 'react'
import { toast } from 'react-toastify';

const useNotification = () => {
    const autoClose = 6000
    const error = (message) => toast.error(message || 'An error has occurred', { autoClose })
    const success = (message) => toast.success(message || 'Success', { autoClose })
  return {
    error,
    success
  }
}

export default useNotification