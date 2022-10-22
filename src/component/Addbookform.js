import React from 'react'
import { useForm } from "react-hook-form";

const cetagory =[
    {id:1,cate: 'poems', value:'poems'},
    {id:2,cate: 'horror', value:'horror'},
    {id:3,cate: 'story', value:'story'},
]

const Addbookform = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch(onSubmit))


  return (
        <form onSubmit={handleSubmit(onSubmit)}>

      <input className='form-input' placeholder='Book name' {...register("bookName", { required: true, maxLength: 30})} />
      <br/>
      <input className='form-input' placeholder='Book Url' {...register("bookUrl", { required: true})} />
      <br/>
        <select className='form-input' name="Book Cate" {...register("bookCate", { required: true})}>
        {
           cetagory.map(bookCate=><option key={bookCate.id} value={bookCate.value}>{bookCate.cate}</option>)
        }
        </select>

      <br/>
      <input type="submit" onClick={props.handleClose}/>
    </form>
  )
}

export default Addbookform