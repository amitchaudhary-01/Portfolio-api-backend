import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


const schema = z.object({
  firstname: z.string().min(3, "First name must be at least 3 characters").max(10, "First name cannot exceed 10 characters"),

  lastname: z.string().min(2, "Last name must be at least 2 characters").max(10, "Last name cannot exceed 10 characters"),

  email: z.string().email("Please enter a valid email address"),

  contact: z.string().regex(/^[0-9]{10}$/, "Contact number must be exactly 10 digits"),
});

const Form = () => {
  const[data,setData] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
  resolver: zodResolver(schema),
});

  const onsubmit = async(data) =>{
    try {
      
      const res = await axios.post(" http://localhost:2001/uform",data)
      // setData(res.data.data)

      toast.success("register successfully")

    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onsubmit)}>
<input type="text"  {...register("firstname")} placeholder='firstname'/>
 <p className='text-red-500'>{errors.firstname?.message}</p>
<input type="text" {...register("lastname")} placeholder='lastname' />
<p className='text-red-500'>{errors.lastname?.message}</p>
<input type="text"  {...register("email")} placeholder='email'/>
<p className='text-red-500'>{errors.email?.message}</p>
<input type="text"  {...register("contact")} placeholder='contact'/>
<p className='text-red-500'>{errors.contact?.message}</p>

<button>submit</button>

      </form>
    </div>
  )
}

export default Form
