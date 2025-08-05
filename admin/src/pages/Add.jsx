import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {
  const [image1, setImage1] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState('')
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("sizes", JSON.stringify(sizes))
      image1 && formData.append("image1", image1)

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}})
      if(response.data.success){
        toast.success(response.data.message)
        setName("")
        setDescription("")
        setPrice('')
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit = {onSubmitHandler}>
      <div>
        <p className='mb-2'>Upload Image:</p>

        <label htmlFor="image1">
          <img className='w-40 mb-10 border border-gray-300 rounded-sm' src={!image1 ? assets.file_upload : URL.createObjectURL(image1)} alt="file upload space" />
          <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
        </label>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name:</p>
        <input onChange={(e) => setName(e.target.value)} value = {name} className='w-full max-w-[500px] px-3 py-2 border-gray-300 border mb-4' type="text" placeholder='Type here' />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description:</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value = {description} className='w-full max-w-[500px] px-3 py-2 border-gray-300 border mb-4' type="text" placeholder='Write content here' />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Price (per kg):</p>
        <input onChange={(e) => setPrice(e.target.value)} value = {price} className='w-full max-w-[500px] px-3 py-2 border-gray-300 border mb-4' type="Number" placeholder='0' />
      </div>

      <div className='mb-10'>
        <p className='mb-2'>Product sizes:</p>
        <div className='flex gap-3'>
          <div onClick = {() => setSizes(prev => prev.includes(5) ? prev.filter(item => item !== 5) : [...prev, 5])}>
            <p className={`${sizes.includes(5) ? "bg-[var(--light-yellow)] text-[var(--brown)]" : "bg-slate-200"} px-3 py-2 cursor-pointer rounded-sm`}>5kg</p>
          </div>
          <div onClick = {() => setSizes(prev => prev.includes(10) ? prev.filter(item => item !== 10) : [...prev, 10])}>
            <p className={`${sizes.includes(10) ? "bg-[var(--light-yellow)] text-[var(--brown)]" : "bg-slate-200"} px-3 py-2 cursor-pointer rounded-sm`}>10kg</p>
          </div>
        </div>
      </div>
      <button type="submit" className='bg-black text-white px-8 py-3 mt-4 mb-8 rounded-sm cursor-pointer'>Add</button>
    </form>
  )
}

export default Add
