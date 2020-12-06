import React from "react";
import Category from "./Categories";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import { NavLink } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import { useGlobalContext } from "./Context";

const Overview = () => {
  const {
    courses,
    handleSaveOptionBtn,
    handleSave,
    saveOption,
  } = useGlobalContext();
  return (
    <>
      <Topnav />
      <Sidenav />
      <div className="overview">
        <div className="top-title">
          <h2>Overview</h2>
          <NavLink className="seemore-btn" to="/seemore">
            <button className="top-title-btn">see more</button>
          </NavLink>
        </div>
        <div className="overview-iterate">
          {courses.map((courseList, index) => {
            const { id, category, past, posted, course, url } = courseList;
            if (index < 3) {
             return (
               <div className="single-course" key={id}>
                 <div className="iframe">
                   <iframe
                     title={course}
                     width="560"
                     height="315"
                     src={url}
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                   ></iframe>
                 </div>
                 <div className="button">
                   <h4 className="course-topic">{course}</h4>
                   {saveOption && (
                     <div className="save-option">
                       <p className="add">
                         <AiFillAppstore /> Add to queue
                       </p>
                       <hr />
                       <p
                         className="save"
                         onClick={() =>
                           handleSave({
                             course: course,
                             category: category,
                             url: url,
                           })
                         }
                       >
                         <AiFillAppstore /> Save
                       </p>
                     </div>
                   )}
                   <button
                     type="button"
                     className="dot-btn"
                     onClick={() => handleSaveOptionBtn(id)}
                   >
                     ...
                   </button>
                 </div>
                 <p className="course-name">{category}</p>
                 <p className="posted">{posted()}</p>
                 <p className="past">{past}</p>
               </div>
             );
            
            }return [];
          })}
        </div>
        <Category />
      </div>
    </>
  );
};

export default Overview;
