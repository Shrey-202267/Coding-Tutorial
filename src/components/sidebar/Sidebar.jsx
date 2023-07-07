import React, { useState } from "react";
import "./Sidebar.css";
import { categories } from "../../utils/constants";

const Sidebar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <div className="sidebar">
      {categories.map((category) => {
        return (
          <button
            key={category.name}
            className="category-btn"
            onClick={() => {
              setselectedCategory(category.name);
            }}
            style={{
              background: category.name === selectedCategory && "#5468ff",
              color: category.name === selectedCategory ? "#fff" : "#A0AAB4",
            }}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
