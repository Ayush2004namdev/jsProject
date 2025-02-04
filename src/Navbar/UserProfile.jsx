import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import './UserProfile.css';

const UserProfile = (props) => {
    const { getUserData } = props;
    const userData = getUserData("userData");
  
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    function handleAvatarClick() {
      setIsDropdownOpen(!isDropdownOpen);
    }
  
    // console.log("Avatar Dropped", isDropdownOpen);
  
    return (
      <div className="user-profile">
        <div className="login-icon" onClick={handleAvatarClick}>
          <PersonIcon />
          <p>{userData.userName}</p>
        </div>
        {isDropdownOpen && (
          <div className="user-avatar">
            <Link to="/orders">
              <p>Orders</p>
            </Link>
              <p>Wishlist</p>
            <p>Gift Cards</p>
            <p>Contact Us</p>
          </div>
        )}
      </div>
    );
}

export default UserProfile