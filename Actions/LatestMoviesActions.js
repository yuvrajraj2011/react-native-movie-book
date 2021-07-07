import axios from 'axios'

export const FETCH_LATESTMOVIES_BEGIN   = 'FETCH_LATESTMOVIES_BEGIN';
export const FETCH_LATESTMOVIES_SUCCESS = 'FETCH_LATESTMOVIES_SUCCESS';
export const FETCH_LATESTMOVIES_FAILURE = 'FETCH_LATESTMOVIES_FAILURE';

export const fetchLatestMoviesBegin = () => ({
    type: FETCH_LATESTMOVIES_BEGIN
  });
 
 export const fetchLatestMoviesSuccess = latestMovies => ({
   type: FETCH_LATESTMOVIES_SUCCESS,
   payload:  latestMovies 
 });
 
 export const fetchLatestMoviesFailure = error => ({
   type: FETCH_LATESTMOVIES_FAILURE,
   payload: { error }
 });

 export function fetchLatestMovies(){
   console.log("in fetchLatestMovies!!")
   return dispatch=>{
     dispatch(fetchLatestMoviesBegin());
    return axios.get('http://3.17.216.66:4000/latest')
     .then(resp=>{
       const latestMovies= resp.data;
       dispatch(fetchLatestMoviesSuccess(latestMovies))
     })
     .catch(error=>{
       dispatch(fetchLatestMoviesFailure(error.message))
     })

   }
 }

 