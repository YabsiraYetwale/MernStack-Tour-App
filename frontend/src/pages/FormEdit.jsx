import React, { useState,useEffect } from 'react'
import { Box} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchProduct, updateProduct } from '../actions/product'
import {
  FormContainer,
  FormWrapper,
  Form,
  Title,
  InputField,
  SelectWrapper,
  PriceInput,
  CategorySelect,
  UploadWrapper,
  UploadLabel,
  SubmitButton,
} from './styles/Form.styles';
export const FormHome = () => {
  const [curId,setCurId]=useState(0)
  return(
    <>
    <FormEdit curId={curId} setCurId={setCurId}/>
    <Details setCurId={setCurId}/>
    </>
  )
}
export const Details = ({setCurId}) => {
  const {product}=useSelector(state=>state.products)
  const dispatch=useDispatch()
  const {id}=useParams()
  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [dispatch,id])
  return(
    <>
    <div  onClick={setCurId(product._id)}/>
   </>
  )
}
export const FormEdit = ({curId,setCurId}) => {
  const dispatch=useDispatch()
  const history=useNavigate()
  const [formData,setFormData]=useState({title:'',description:'',category:'',image:'',oldPrice:0,newPrice:0,})
  const {id}=useParams()
  const {product}=useSelector(state=>state.products)
  const [image,setImage]=useState()
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    const formdata=new FormData()
    formdata.append('image',image)
    formdata.append('title',formData.title)
    formdata.append('description',formData.description)
    formdata.append('category',formData.category)
    formdata.append('oldPrice',formData.oldPrice)
    formdata.append('newPrice',formData.newPrice)
    dispatch(updateProduct(curId,formdata,history))

  }
  useEffect(() => {
    if (product) {
      setFormData(product)
    }
  }, [product])
  
  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [dispatch,id])
  return (
    <>
      <FormContainer>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <Title variant="h4">Edit Product</Title>
            <InputField
              variant="outlined"
              type="text"
              label="Property Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <InputField
              variant="outlined"
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />

            <SelectWrapper>
              <PriceInput
                variant="outlined"
                type="number"
                label="Price"
                name="oldPrice"
                value={formData.oldPrice}
                onChange={(e) => setFormData({ ...formData, oldPrice: e.target.value })}
              />

              <PriceInput
                variant="outlined"
                type="number"
                label="Offer Price"
                value={formData.newPrice}
                onChange={(e) => setFormData({ ...formData, newPrice: e.target.value })}
              />
            </SelectWrapper>

            <CategorySelect
              style={{ height: '30px' }}
              name="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="">----choose----</option>
              <option value="men">men</option>
              <option value="women">women</option>
              <option value="kids">kids</option>
            </CategorySelect>

            <UploadWrapper>
              <UploadLabel htmlFor="file">
                <Box sx={{ color: '#3e8499', fontWeight: 'bold', cursor: 'pointer' }}>upload*</Box>
              </UploadLabel>
              <input variant="outlined" type="file" onChange={(e) => setImage(e.target.files[0])} />
            </UploadWrapper>

            <SubmitButton variant="contained" size="large" type="submit">
              Update
            </SubmitButton>
          </Form>
        </FormWrapper>
      </FormContainer>
    </>
  );
}
