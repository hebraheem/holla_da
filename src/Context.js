import React, { useState, useContext, useEffect } from 'react'
import { Courses } from "./data";

const AppContext = React.createContext()
// localStorage for saved  videos
// const VideoStorage = ()=>{
//     let saveClasses = localStorage.getItem("videos")
//     if(saveClasses){
//         return JSON.parse(localStorage.getItem('videos'))
//     } else {
//         return [ ]
//     }
// }

const AppProvider = ({children}) =>{
    //OVERVIEW PAGE
    const [courses, setCourse] = useState(Courses);
    const [saveOption, setSaveOption] = useState(false);
    const [seeMore, setSeeMore] = useState(false)

    // SAVE VIDEO PAGE

    // const [saveVideo, setSaveVideo] = useState(VideoStorage());

    const [saveVideo, setSaveVideo] = useState([]);

    // LOGIN AND FORGOT PASSWORD PAGE
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('')
    const [ForgotPass, setForgotPass] = useState("");



    // ***********************************************


    // CATEGORY PAGE
    const allCategories = [
      "all",
      ...new Set(courses.map((course) => course.category)),
    ];
    const filterItem = (category) => {
      if (category === "all") {
        return setCourse(Courses);
      }
      const newCourse = courses.filter(
        (course) => course.category === category
      );
      setCourse(newCourse);
    };

    //*********************************************** */


    // OVERVIEW PAGE
    const handleSaveOptionBtn = (id) => {
      courses.filter((course) => course.id === id) 
        setSaveOption(!saveOption);
    };

    //******************************************** */

    // SAVED VIDE0 PAGE
    const handleSave = ({course, category,url}) => {
        saveVideo.push({ course, category,url, id: new Date().getTime().toString()});
        setSaveVideo([ ...saveVideo]);
    };

    useEffect(()=>{
        localStorage.setItem("videos", JSON.stringify(saveVideo))
    },[saveVideo])

    const deleteSaved =(id)=>{
        const deleteSave = saveVideo.filter((saveVid) => saveVid.id !== id);
        setSaveVideo(deleteSave);
        
    }

    //*******************************************************

    // LOGIN AND PASSWORD FORM
    const handleLogin= (e)=>{
        e.preventDefault()
    }
    const handleForgotPass = (e) => {
      e.preventDefault();
    };


    return (
      <AppContext.Provider
        value={{
          handleSave,
          handleSaveOptionBtn,
          filterItem,
          allCategories,
          courses,
          userName,
          setUserName,
          userPassword,
          setUserPassword,
          handleLogin,
          saveVideo,
          saveOption,
          deleteSaved,
          handleForgotPass,
          ForgotPass,
          setForgotPass,
          seeMore,
          setSeeMore,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}
// CUSTOM HOOK
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}