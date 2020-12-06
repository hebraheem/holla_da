import React, {useState} from 'react';
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import StudentAlert from './StudentAlert'
import Alert from './Alert'

const Topnav = ()=>{
  const [searchInput, setSearchInput] = useState();
  const [openAlert, setOpenAlert] = useState(false);
  const [notification, setNotification] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <>
      <div className="topnav">
        <div className="form-div">
          <form action="" className="search-form" onSubmit={handleSubmit}>
            <input
              className="search-input"
              type="text"
              name="searchInput"
              placeholder="search"
              value={searchInput}
              onClick={() => setSearchInput(searchInput)}
            />
            <button className="search-btn">
              <AiOutlineSearch style={{color:"white"}} />
            </button>
          </form>
        </div>
        <div className="buttons">
          <button
            className="alert-btn"
            onClick={() => setNotification(!notification)}
          >
            {" "}
            <IoMdNotifications style={{ color: "#322035", fontSize: "1rem" }} />
          </button>
          <button
            className="user-icon"
            onClick={() => setOpenAlert(!openAlert)}
          >
            AI
          </button>
        </div>
        {openAlert && <StudentAlert />}
        {notification && <Alert />}
      </div>
    </>
  );
}

export default Topnav;