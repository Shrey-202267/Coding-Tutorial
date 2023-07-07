import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="header__content">
          <h1>
            Still Confused About{" "}
            <span style={{ color: "#66B2FF" }}>coding ?</span>
          </h1>
          <p className="para__content">
            Quality Coding, By Any Means Necessary, All you need is here.As a
            beginner to find best resources, information and tools for coding is
            not an easy task, This website is the best medium to find the
            resources, learn coding languages, increase problem solving skills
            and stayed focused.
          </p>

          <Link to="/resources" className="btn_link">
            <button>
              Resources{" "}
              <ArrowForwardIosIcon
                style={{ fontSize: "15px", marginLeft: "3px" }}
              />
            </button>
          </Link>
        </div>

        <div className="header__image">
          <img
            className="main_image"
            src="https://cdn-icons-png.flaticon.com/512/1256/1256250.png?w=740&t=st=1667504391~exp=1667504991~hmac=3d57f42d4dae758dadcbde9c0ce7f97895521a850aa8d2f157c4f33a42a72811"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
