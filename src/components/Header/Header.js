import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "../../features/counter/userSlice";
import { auth } from "../../Firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    console.log("clicked");
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="jobs" />
        <HeaderOption Icon={ChatIcon} title="Messagaing" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar={true}
          title="Lazim"
          onClicked={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;


// https://media.licdn.com/dms/image/D5603AQGBjNzveylCgA/profile-displayphoto-shrink_800_800/0/1669732008876?e=1677110400&v=beta&t=MsISFHw13yN4y2LPB3g1cEwWaDpchhR-2vBFoOYImmk