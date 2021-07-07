import axios from 'axios'

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });
 
 export const fetchProductsSuccess = products => ({
   type: FETCH_PRODUCTS_SUCCESS,
   payload:  products 
 });
 
 export const fetchProductsFailure = error => ({
   type: FETCH_PRODUCTS_FAILURE,
   payload: { error }
 });

 export function fetchProducts(){
   console.log("in fetchproducts!!")
   return dispatch=>{
     dispatch(fetchProductsBegin());
<<<<<<< HEAD
    return axios.get('http://3.17.216.66:4000/latest')
=======
    return axios.get('http://localhost:6700/restaurants')
>>>>>>> 16e1c2d0ca996b2335e1f97fb3ae8be00e470895
     .then(resp=>{
       const products= resp.data;
       dispatch(fetchProductsSuccess(products))
     })
     .catch(error=>{
       dispatch(fetchProductsFailure(error.message))
     })

   }
 }

 