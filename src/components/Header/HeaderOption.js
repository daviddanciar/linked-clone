import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import "./HeaderOption.css";
import { selectUser } from "./../../Redux/userSlice";

export default function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  const { displayName, photoUrl } = user.user;

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={photoUrl}>
          {displayName[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}
