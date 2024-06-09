import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import { ShoppingCart } from '@mui/icons-material';
import {ReactSearchAutocomplete} from 'react-search-autocomplete'
import Login from './Login';
import data from '../product';
import './Navbar.css'
import { Menu } from '@mui/material';
import { useSelector } from 'react-redux';

const Navbar = (props) => {
    const { cartItemsCount, isSignedIn, signIn } = props;
    const [isNavOpen, setNavOpen] = useState(false);
    const [isVisible, setisVisible] = useState(false);
    function getUserData(k) {
      if (isSignedIn) {
        const userData = useSelector((state) => state.UserData.userData);
        return userData;
      }
    }
  
    const handleOnSearch = (string, results) => {
      console.log(string, results);
    };
  
    const handleOnHover = (result) => {
      console.log(result);
    };
  
    const handleOnSelect = (item) => {
      window.location = `/products/${item.id}`;
    };
  
    const handleOnFocus = () => {
      console.log("Focused");
    };
  
    const handleOnClear = () => {
      console.log("Cleared");
    };
  
    function MobileNav() {
      return (
        <div className="display-mobile-nav">
          <div className="mobile-nav-links">
            {isSignedIn ? (
              <UserProfile signIn={signIn} getUserData={getUserData} />
            ) : (
              ""
            )}
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/orders">
              <p>My Orders</p>
            </Link>
            <Link to="/wishlist">
              <p>Wishlist</p>
            </Link>
          </div>
          <div className="close-mobile-menu" onClick={handleMobileMenu}>
          </div>
        </div>
      );
    }
  
    function handleMobileMenu() {
      setNavOpen(!isNavOpen);
    }
  
    return (
      <div>
        {!isNavOpen && (
          <div className="md:hidden">
            <div className="mobile-nav">
              <div className="mobile-menu" onClick={handleMobileMenu}>
                <Menu />
              </div>
              <div className="mobile-logo flex items-center text-black">
                <Link to="">
                  <h1 className="Logo mobile-logo">
                    Well<span>Done</span>
                  </h1>
                </Link>
              </div>
              <div className="mobile-right-flex">
                <div className="mobile-avatar">
                  {isSignedIn ? '' : 'hello'}
                </div>
                <div className="mobile-cart">
                  <div
                    style={{
                      position: "absolute",
                      color: "white",
                      fontSize: "0.8rem",
                      padding: "0.08rem 0.4rem",
                      borderRadius: "50%",
                      backgroundColor: "rgb(189, 153, 189)",
                      right: "8px",
                      top: "6px",
                    }}
                  >
                    {cartItemsCount}
                  </div>
                  <Link to="/cart">
                  <ShoppingCart />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {isNavOpen && MobileNav()}
  
        <div className="hidden md:block desktop-nav">
          <div className="Navbar w-full p-3">
            <div className="Navbar__left">
              <Link to="">
                <h1 className="Logo">
                  Well<span>Done</span>
                </h1>
              </Link>
  
              <h1 className="cat" onClick={() => setisVisible(!isVisible)}>
                Category
              </h1>
            </div>
            <div className="Navbar__right">
              <div className="search-bar">
                <ReactSearchAutocomplete
                  items={data}
                  maxResults={15}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  placeholder="Search for product, brands and more"
                  onClear={handleOnClear}
                  fuseOptions={{ keys: ["name", "description"] }} // Search in the description text as well
                  styling={{
                    zIndex: 100,
                    borderRadius: "5px",
                    boxShadow: "none",
                    border: "1px solid #e5e5e5",
                    height: "5vh",
                    placeholderFontSize: "2.5vh",
                    fontSize: "2.2vh",
                  }}
                  className="search" // To display it on top of the search box below
                />
              </div>
  
              {/* <h1>Profile</h1> */}
              <div className="Navbar__right__right">
                {isSignedIn ? (
                  <UserProfile
                    signIn={signIn}
                    getUserData={getUserData}
                    className="avatar"
                  />
                ) : (
                  <Login signIn={signIn} className="avatar" />
                )}
                <div className="cart">
                  <div
                    style={{
                      position: "absolute",
                      color: "white",
                      fontSize: "0.8rem",
                      padding: "0.1rem 0.5rem",
                      borderRadius: "50%",
                      backgroundColor: "rgb(189, 153, 189)",
                      left: "10px",
                      top: "-15px",
                    }}
                  >
                    {cartItemsCount}
                  </div>
                  <Link to="/cart">
                    <ShoppingCart />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar