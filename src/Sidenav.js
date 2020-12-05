import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import {NavLink} from 'react-router-dom'


function Sidenav() {
    return (
      <>
        <div className="sidenav">
          <NavLink
            className="side-link"
            activeClassName="active-link"
            exact
            to="/overview"
          >
            <p className="overview-btn">
              <AiFillAppstore />
              <span className="hideSmall">Overview</span>
            </p>
          </NavLink>
          <NavLink
            className="side-link"
            activeClassName="active-link"
            exact
            to="/savedpage"
          >
            <p className="saved-btn">
              <AiFillAppstore />
              <span className="hideSmall">Saved Classes</span>
            </p>
          </NavLink>
        </div>
      </>
    );
}

export default Sidenav;