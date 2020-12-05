import React from 'react';
import Category from './Categories'
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import { AiFillAppstore } from "react-icons/ai";
import {useGlobalContext} from './Context'

const Overview =()=>{

  const {
    courses,
    handleSaveOptionBtn,
    handleSave, saveOption} = useGlobalContext();

    return (
      <>
      <Topnav />
      <Sidenav />
        <div className="overview">
          <h2>Overview</h2>
          <div className="overview-iterate">
            {courses.map((courseList) => {
              const { id, category, past, posted, course } = courseList;
              return (
                <div className="single-course" key={id}>
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
                            handleSave({ course: course, category: category })
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
            })}
          </div>
          <Category />
        </div>
      </>
    );
    
}

export default  Overview;
