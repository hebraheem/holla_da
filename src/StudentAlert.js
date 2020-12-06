import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import {NavLink} from 'react-router-dom';


function StudentAlert() {
    return (
      <>
        <div className="alert">
          <div className="profile">
            <div className="avatar">A</div>
            <div className="email">
              <h4 className="user-name">Adenike Tolulope</h4>
              <p className="mail">Adeniketolu@gmail.com</p>
              <p className="change-pics">Change picture</p>
            </div>
          </div>
          <hr />
          <p className="change-user">
            <AiFillAppstore /> Change Username
          </p>
          <p className="change-password">
            <AiFillAppstore /> Change password
          </p>
          <p className="contact-admin">
            <AiFillAppstore /> Contact Admin
          </p>
          <NavLink to ="/" style={{textDecoration:"none", color:"#322035"}}>
            <p className="logout">
              <AiFillAppstore /> Logout
            </p>
          </NavLink>
        </div>
      </>
    );
}

export default StudentAlert;