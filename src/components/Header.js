import React from 'react'; //optional

export default function Header(){
  return (
    <>
    <div className="header">
          
            <h1 className="child bounce">MealBuddy</h1>
            
         </div>
      <div className="App">
        <div className="sidebar">
          <p className="sidebar-text">Menu</p>
          
          <p className="sidebar-text">Grocery List</p>
          
          <p className="sidebar-text">Settings</p>
        </div>
        <div className="mainpage">
          <h1>Home Page "/"</h1>
          <p>Welcome to the Visual Playground. Currently all items render in this one page (just scroll down). Feel free to add any mock-ups for styling of any component you're working on. Please add new component mock-ups in the App.js file in the return section with a label. Please add all styling to App.css</p>
        </div>
      </div> 
      </>

  );
}
