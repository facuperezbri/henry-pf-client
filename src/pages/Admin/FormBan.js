import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../components/uiComponents/Button'
import InputComponent from '../../components/uiComponents/InputComponent'
import { SEARCH_USER } from '../../services/SEARCH_USER'




const FormBan = ({ setUsers }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    SEARCH_USER(data?.username)
        .then((res) => { 
            setUsers(res)
        })
        .catch(console.error)
  }

  const clearSearch = () => {
    setUsers([])
    reset()
  }

  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)} className='border-b-2 border-t-teal-500 p-4 mb-4'>
            {/* <Card> */}
                <div className='grid place-content-center'>
                    <InputComponent labeltext='Search user' register={register} errors={errors} name='username' placeholder='Email or username to search' type='text' config={{ required: true, minLength: 3 }} />
                    <div className='flex justify-center gap-4'>
                        <Button type='submit' className='w-full'>Search</Button>
                        <Button onClick={clearSearch}>
                            Clear Search
                        </Button>
                    </div>
                </div>
        </form>

    </div>
  )
}

export default FormBan