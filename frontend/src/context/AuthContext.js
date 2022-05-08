import { createContext,useReducer } from "react";
import AuthReducer from './AuthReducer'
const INITIAL_STATE= {
    user: {
            _id: "62713f9f9ed310e8fdc8713e",
            username:"ahmed",
            email:"ahmed.soli101@gmail.com",

            profilePicture:"/profileImg/ahmed.jpg",
            coverPicture:"",
            followers:[1,2,3],
            following:[1,2,3],
            isAdmin:false,
            createdAt:'2022-05-03T14:43:43.104+00:00',
            updatedAt :'2022-05-03T22:23:30.768+00:00',
            city:"Budapest",
            relationship:2
    },
    isFetching:false,
    error: false
};


export const AuthContext = createContext(INITIAL_STATE);


export const AuthContextProvider = ({children})=>{
    const [state, dispatch]= useReducer(AuthReducer,INITIAL_STATE);

    return (
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error: state.error,dispatch}}>
            {children}
        </AuthContext.Provider>
    );
};