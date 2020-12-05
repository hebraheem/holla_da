import React from 'react';
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import {useGlobalContext} from './Context'
import { MdDeleteForever } from "react-icons/md";

function SavedPage(){

    const {saveVideo, deleteSaved} = useGlobalContext();

    return (
      <>
      <Topnav />
      <Sidenav />
        <div className="savedpages">
          <h2>Saved Videos</h2>
          <div className="overview-iterate" style={{ width: "75vw" }}>
            {saveVideo.map((save_video) => {
              const { id, category, course } = save_video;
              if (saveVideo.length < 0) {
                console.log(saveVideo.length);
                return <h3 style={{}}>Your saved video(s) will appear here</h3>;
              } else {
                return (
                  <div className="single-course" key={id}>
                    <div className="button">
                      <h4 className="course-topic">{course}</h4>
                      <button
                        type="button"
                        className="dot-btn"
                        style={{ transform: "rotate(0deg)" }}
                        onClick={() => deleteSaved(id)}
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                    <p className="course-name">{category}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
}

export default SavedPage;