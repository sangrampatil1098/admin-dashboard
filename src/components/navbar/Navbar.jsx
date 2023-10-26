import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import ListIcon from "@mui/icons-material/List";
import { useContext } from "react";
import { DarkModeContext } from "../../DarkModeContext/DarkModeProvider";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search" />
          <SearchOutlinedIcon />
        </div>
        <div className="icons">
          <div className="icon">
            <LanguageOutlinedIcon />
            <p>English</p>
          </div>
          <div className="icon">
            <DarkModeOutlinedIcon
              onClick={() => dispatch({ type: "TOGGLE" })}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="icon">
            <FullscreenExitOutlinedIcon />
          </div>
          <div className="icon">
            <NotificationsNoneOutlinedIcon />
            <div className="counter">1</div>
          </div>
          <div className="icon">
            <ChatBubbleOutlinedIcon />
            <div className="counter">1</div>
          </div>
          <div className="icon">
            <ListIcon />
          </div>
          <div className="icon">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
              alt="profile image"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
