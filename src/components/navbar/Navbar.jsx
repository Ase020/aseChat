import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "./navbar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModecontext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>aseChat</span>
        </Link>

        <HomeOutlinedIcon style={{ cursor: "pointer" }} />

        {darkMode ? (
          <WbSunnyOutlinedIcon
            style={{ cursor: "pointer" }}
            onClick={toggleDarkMode}
          />
        ) : (
          <DarkModeOutlinedIcon
            style={{ cursor: "pointer" }}
            onClick={toggleDarkMode}
          />
        )}

        <GridViewOutlinedIcon style={{ cursor: "pointer" }} />

        <div className="search">
          <SearchOutlinedIcon style={{ color: "darkslateblue" }} />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="right">
        <PersonOutlinedIcon style={{ cursor: "pointer" }} />
        <EmailOutlinedIcon style={{ cursor: "pointer" }} />
        <NotificationsOutlinedIcon style={{ cursor: "pointer" }} />

        <div className="user">
          <img src={currentUser.profilePic} alt="user" height={30} width={30} />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
