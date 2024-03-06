import * as api from "../api";
import {
  CREATE,
  FETCH_ALL,
  FETCH,
  UPDATE,
  DELETE,
  START_LOADING,
  END_LOADING,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../components/actionTypes";

export const createProduct = (product, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createProduct(product);
    dispatch({ type: CREATE, payload: data });
    history("/");
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchProducts();
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const fetchProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchProduct(id);
    dispatch({ type: FETCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = (id, product, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateProduct(id, product);
    dispatch({ type: UPDATE, payload: data });
    history(`/product/${id}`);
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = (id, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {data}= await api.deleteProduct(id);
    dispatch({ type: DELETE, payload: id });
    if(data?.deletedProduct?.category === 'kids'){
      history("/catagory/kids");
    }
    else if(data?.deletedProduct?.category === 'men'){
      history("/catagory/men");
    }
    else{
      history("/catagory/women");
    }
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    await api.deleteProduct(id);
    dispatch({ type: DELETE, payload: id });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const addToCart = (productId, quantity,history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.addToCart(productId, quantity);
    dispatch({ type: ADD_TO_CART, payload: data });
    history(`/product/${productId}`);
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const removeFromCart = (productId,history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.removeFromCart(productId);
    dispatch({ type: REMOVE_FROM_CART, payload: data });
    history('/cart')
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};






