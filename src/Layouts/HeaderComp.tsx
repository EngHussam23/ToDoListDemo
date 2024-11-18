import React from "react";

const HeaderComp: React.FC = () => {
  return (
    <div className="NavBar">
      <img src="./Logo.svg" alt="ToDo Logo" className="ToDoLogo" />
      <div>
        <img
          src="./home Selected.svg"
          alt="Homepage Icon"
          className="NavIcon"
        />
        <img
          src="./about Default.svg"
          alt="About Us Icon"
          className="NavIcon"
        />
        <img
          src="./Dark Default.svg"
          alt="Dark/Light Mode Icon"
          className="NavIcon"
        />
      </div>
    </div>
  );
};

export default HeaderComp;
