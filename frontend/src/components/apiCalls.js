  import axios from 'axios';
  
  export const loginCall = async(crediential,dispatch)=>{
      dispatch({
          type: "LOGIN"
      });
      try{
          const res = await axios.post("users/login", crediential);
          dispatch({
              type: "LOGIN_SUCCESS",
              payload: res.data
          })
      }catch(err){
          dispatch({
              type: "LOGIN_FAILURE",
              payload: err
          })
      }
  };