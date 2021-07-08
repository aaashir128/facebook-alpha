import { Avatar } from "@material-ui/core";
import {
  LocalHospital,
  PeopleOutlined,
  ChatOutlined,
  VideoLibraryOutlined,
  ExpandMoreOutlined,
  Storefront
} from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../config/StateProvider";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="sidebar">
     {user && <SidebarRow
        className="sidebar__details"
        title={user.displayName}
        src={user.photoURL}
      />}
      <SidebarRow Icon={LocalHospital} title="Covid-19 Information Center" />
      <SidebarRow Icon={PeopleOutlined} title="Friend" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={ChatOutlined} title="Messages" />
      <SidebarRow Icon={VideoLibraryOutlined} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="View More" />
    </div>
  );
}

export default Sidebar;
