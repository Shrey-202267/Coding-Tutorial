import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Videos from "../video/Videos";
import "./Resources.css";
import { fetchFromAPI } from "../../utils/fetchFromAPI.js";

const Resources = () => {
  const [selectedCategory, setselectedCategory] = useState("Coding");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}programming`).then(
      (data) => {
        setvideos(data.items);
      }
    );
  }, [selectedCategory]);

  return (
    <div className="resources">
      <Sidebar
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
      />
      <Videos selectedCategory={selectedCategory} videos={videos} />
    </div>
  );
};

export default Resources;
