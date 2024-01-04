import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "./axios/api";
import axios from "./utils/axios.customize";

function App() {
  const [email, setEmail] = useState("test777@gmail.com");
  const [password, setPassword] = useState("123456");
  const [name, setName] = useState("Shina Mahihi");
  const [phoneNumber, setPhoneNumber] = useState("093213123123");
  const [birth, setBirth] = useState("2009-12-04T04:40:53.576Z");
  const [address, setAddress] = useState("123 texas, VN");
  const [role, setRole] = useState("SELLER");
  const [id, setId] = useState(1);
  const [listUser, setListUser] = useState([]);
  const productId = 5;
  const deleteProduct = async () => {
    const res = await axios.delete("api/v1/product", {
      data: {
        id: productId,
      },
    });
    console.log(res);
  };
  useEffect(() => {
    fetchListUser();
    console.log(listUser);
  }, []);
  const fetchListUser = async () => {
    const res = await getAllUser();
    if (res && res.statusCode >= 200 && res.statusCode <= 299) {
      console.log("Succeed");
      console.log(res.data);
      setListUser(res.data);
    } else {
      console.log("Failed!");
      console.log(res);
    }
  };
  const submitUser = async () => {
    const res = await createUser(
      email,
      password,
      name,
      phoneNumber,
      birth,
      address,
      role
    );

    if (res && res.statusCode >= 200 && res.statusCode <= 299) {
      console.log("Succeed");
      console.log(res.data);
      fetchListUser();
    } else {
      console.log("Failed!");
      console.log(res);
    }
  };
  const handleUpdateUser = async () => {
    setName("Shina Mahuhu");
    const res = await updateUser(id, name, phoneNumber, birth, address, role);
    if (res && res.statusCode >= 200 && res.statusCode <= 299) {
      console.log("Succeed");
      console.log(res.data);
      fetchListUser();
    } else {
      console.log("Failed!");
      console.log(res);
    }
  };
  const handleGetUserById = async () => {
    const res = await getUserById(id);
    if (res && res.statusCode >= 200 && res.statusCode <= 299) {
      console.log("Succeed");
      console.log(res.data);
    } else {
      console.log("Failed!");
      console.log(res);
    }
  };
  const handleDeleteUser = async () => {
    const res = await deleteUser(id);
    if (res && res.statusCode >= 200 && res.statusCode <= 299) {
      console.log("Succeed");
      console.log(res.data);
      fetchListUser();
    } else {
      console.log("Failed!");
      console.log(res);
    }
  };
  return (
    <>
      <table>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>password</th>
          <th>name</th>
          <th>phoneNumber</th>
          <th>birth</th>
          <th>address</th>
          <th>role</th>
        </tr>
        {listUser &&
          listUser.length > 0 &&
          listUser.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.name}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.birth}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
              </tr>
            );
          })}
      </table>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        value={birth}
        onChange={(e) => setBirth(e.target.value)}
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          submitUser();
        }}
      >
        Create
      </button>
      <button onClick={() => handleUpdateUser()}>Update</button>
      <button onClick={() => handleGetUserById()}> Get User By Id</button>
      <button onClick={() => handleDeleteUser()}>Delete User</button>
      <button onClick={deleteProduct}> Delete Product</button>
    </>
  );
}

export default App;
