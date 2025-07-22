import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import { use } from "react";
import { AppContext } from "../../context/AppContext";


function Navbar() {


  const {navigate , isEducator} = useContext(AppContext)

  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  const{openSignIn} = useClerk();
  const{user} = useUser();

  return (
    <div className={`navbar ${isCourseListPage ? "white-bg" : "cyan-bg"}`}>
      <h1 className="logo" onClick={()=> navigate('/')}>
        <img src={assets.logo} alt="Logo" />
        <span>EduCodex</span>
      </h1>

      <div className="nav-buttons">
        <div className="container">
          {user && (
            <>
              <Link to="/educator" className="link-button  hide-md" onclick={()=> {navigate('/educator')}}>
                {isEducator? 'Educator Dashboard ' : 'Become Educator'}
              </Link>
              <span>|</span>
              <Link to="/my-enrollments" className="link-button">
                My Enrollments
              </Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            className="create-account-btn"
            onClick={() => {
              openSignIn();
            }}
          >
            Create Account
          </button>
        )}
      </div>
      <div className="custom-box">
        <div className="custom-flex">
          {user && (
            <>
              <Link to="/educator" className="link-button  hide-md" onclick={()=> {navigate('/educator')}}>
                {isEducator? 'Educator Dashboard ' : 'Become Educator'}
              </Link>
              <span>|</span>
              <Link to="/my-enrollments" className="link-button">
                My Enrollments
              </Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="user" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
