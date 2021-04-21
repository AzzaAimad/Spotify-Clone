import React, { useContext } from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { DateLayerContext } from './DataLayer';
function Sidebar() {

  const [{playlists}, dispatch] = useContext(DateLayerContext);
    return (
      <div className="side_bar">
        <img
          className="sidebar_logo"
          src="https://producteurpro.fr/wp-content/uploads/2019/09/Spotify-logo.jpg"
          alt=""
        />

        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        <br/>
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr />
        {playlists?.items?.map((playlist)=>(
          <SidebarOption title={playlist.name}/>
        ))}
      {/*   <SidebarOption title="hip hop" />
        <SidebarOption title="add list" />
        <SidebarOption title="music app" /> */}
      </div>
    );
}

export default Sidebar
