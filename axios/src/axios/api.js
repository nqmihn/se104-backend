import axios from "../utils/axios.customize";
const getAllUser = () => {
  return axios.get("/api/v1/user");
};
const createUser = (
  email,
  password,
  name,
  phoneNumber,
  birth,
  address,
  role
) => {
  // example: {
  //     "email": "test1@gmail.com",
  //     "password": "123456",
  //     "name": "John Quit",
  //     "phoneNumber": "093213123123",
  //     "birth": "2009-12-04T04:40:53.576Z",
  //     "address": "not found",
  //     "role": "SELLER"
  // }
  // * role must be: USER, SELLER, SHIPPER
  return axios.post("/api/v1/user", {
    email,
    password,
    name,
    phoneNumber,
    birth,
    address,
    role,
  });
};
const updateUser = (id, name, phoneNumber, birth, address, role) => {
  return axios.put(`/api/v1/user/${id}`, {
    name,
    phoneNumber,
    birth,
    address,
    role,
  });
};
const getUserById = (id) => {
  return axios.get(`/api/v1/user/${id}`);
};
const deleteUser = (id) => {
  return axios.delete(`/api/v1/user/${id}`);
};

export { createUser, updateUser, getUserById, deleteUser, getAllUser };
