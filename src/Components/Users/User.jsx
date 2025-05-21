import React from 'react';
import UserList from "../../Utils/UserList";
import styles from './User.module.css';
import { useNavigate } from 'react-router-dom';

export default function User() {
  const details = UserList?.filter((val) => val.role === "user");
  const navigate=useNavigate();


  const emailfun=(val)=>{
    navigate('/UserDetails',{state:val})

  }

    const userRole= JSON.parse(localStorage.getItem("role"))


  return (
    <div>
      {userRole==="user"?<h2>You have no access to this page</h2>:
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {details?.map((val, i) => (
            <tr key={i}>
              <td onClick={()=>emailfun(val)}>{val.email}</td>
              <td>{val.password}</td>
              <td>{val.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
}
    </div>
  );

}
