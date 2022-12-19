import React from "react";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";

function HeaderOption({ avatar, Icon, title, onClicked }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClicked} className="headerOption">
      {Icon && <Icon className="headerOption_Icon" />}
      {avatar && (
        <Avatar className="headerOption_Icon">{user?.email[0]} </Avatar>
      )}
      <h3 className="headerOption_Title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
