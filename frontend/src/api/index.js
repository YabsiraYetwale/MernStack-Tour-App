import axios from 'axios'

const API=axios.create({baseURL:'https://mernstack-eccomerce-server.onrender.com/'})

API.interceptors.request.use((req)=>{
    if (localStorage.getItem("user-auth")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user-auth")).token}`
    }
    return req
})

export const signUpUser=(user)=> API.post('/users/signup',user)
export const signInUser=(user)=> API.post('/users/signin',user)
export const fetchUsers=()=> API.get('/users')

export const img_url='https://mernstack-eccomerce-server.onrender.com/images/'

export const createProduct=(product)=> API.post('/products',product)
export const fetchProducts=()=> API.get('/products')
export const fetchProduct=(id)=> API.get(`/products/${id}`)
export const updateProduct=(id,product)=> API.patch(`/products/${id}`,product)
export const deleteProduct=(id)=> API.delete(`/products/${id}`)


export const addToCart = (productId, quantity) => API.post(`/products/add-to-cart/${productId}`,quantity);
export const removeFromCart = (productId) => API.post(`/products/remove-from-cart/${productId}`);
