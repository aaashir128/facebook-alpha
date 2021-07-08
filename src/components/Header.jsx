import { Avatar, IconButton } from "@material-ui/core";
import {
  Add,
  ArrowDownward,
  Flag,
  Home,
  Message,
  NotificationImportantOutlined,
  PeopleAltOutlined,
  SearchOutlined,
  Storefront,
  VideoCallOutlined,
} from "@material-ui/icons";
import React from "react";
import { Container } from "react-bootstrap";
import { useStateValue } from "../config/StateProvider";
import "./Header.css";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Container>
      <div className="header">
        <div className="header__left">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
            alt="fb logo"
          />
          <div className="header__input">
            <SearchOutlined />
            <input placeholder="Search for Facebook" />
          </div>
        </div>
        <div className="header__center">
          <div className="header__option ">
            <IconButton>
              <Home className="header__optionActive" fontSize="large" />
            </IconButton>
          </div>
          <div className="header__option">
            <IconButton>
              <Flag fontSize="large" />
            </IconButton>
          </div>
          <div className="header__option">
            <IconButton>
              <VideoCallOutlined fontSize="large" />
            </IconButton>
          </div>
          <div className="header__option">
            <IconButton>
              <Storefront fontSize="large" />
            </IconButton>
          </div>
          <div className="header__option">
            <IconButton>
              <PeopleAltOutlined fontSize="large" />
            </IconButton>
          </div>
        </div>

        <div className="header__right">
          <div className="header__info">
            <Avatar src={user.photoURL}/>
            <h4>{user.displayName}</h4>
          </div>

          <IconButton>
            <Add />
          </IconButton>
          <IconButton>
            <Message />
          </IconButton>
          <IconButton>
            <NotificationImportantOutlined />
          </IconButton>
          <IconButton>
            <ArrowDownward />
          </IconButton>
        </div>
      </div>
    </Container>
  );
}

export default Header;
