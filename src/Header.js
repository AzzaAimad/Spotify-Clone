import React, { useContext } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { DateLayerContext } from './DataLayer';
function Header() {
    //we get the profil in datalayer (image profil)
    const [{ user }, dispatch] = useContext(DateLayerContext);
    return (
        <div className="header">
            <div className="header_left">
           <SearchIcon/>
           <input type="text" placeholder="Search for Artists,songs "/>
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user}/>
        <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
