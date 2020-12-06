import React, {useState} from 'react';
import {useGlobalContext} from './Context'

//localStorage for category section
// const getLocalStorage = ()=>{
//   let storage= localStorage.getItem("input");
//   if (storage){
//     return JSON.parse(localStorage.getItem('input'))
//   }
//   else {
//     return []
//   }
// }

//const [input, setInput] = useState(getLocalStorage());

function Category(){

    const {filterItem, allCategories} = useGlobalContext();
    const [input, setInput] = useState('');
    const [isSearchOpen, setIsSearchOpen]=useState(false);

    //localStorage for category section
    // useEffect(()=>{
    //   localStorage.setItem("input", JSON.stringify(input))
    // },[input])
    

    return (
      <>
        <div className="category">
          <h2>Category</h2>
          <div className="category-button">
            {allCategories.map((category, index) => {
              if(input.startsWith(category.split(' ').join().toLowerCase()) || category === input.toLowerCase()){
                return (
                  <button
                    key={index}
                    type="button"
                    className="category-btn"
                    onClick={() => filterItem(category)}
                  >
                    {category}
                  </button>
                );
              } return []

            })}
          </div>
          {isSearchOpen && (
            <form action="" className="update-category" >
              <input
                type="text"
                name=""
                value={input}
                className="update-input"
                placeholder="search"
                onChange={(e) => setInput(e.target.value)}
              />
              {/* <button className="add-input">Add</button> */}
            </form>
          )}
          <button
            className="cat-btn"
            type="button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            Update category
          </button>
        </div>
      </>
    );
    
}

export default Category;