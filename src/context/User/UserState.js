/*
Definicion del estado:
Incluye el estado que se consumira y las funciones que alteraran el estado
*/
import { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import axios from "axios";

const UserState = (props) => {
  const API_URL = "https://reqres.in/api/users";
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const res = await axios.get(API_URL);
    dispatch({
      type:'GET_USERS',
      payload:res.data.data
    })
  };

  const getProfile = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    dispatch({
      type:'GET_PROFILE',
      payload:res.data.data
    })
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
