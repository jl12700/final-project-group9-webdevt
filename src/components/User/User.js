import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/User.css";
import dash3 from "../Assets/dash3.png"; // Importing the logo image
import { BiSolidDashboard } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import ConfirmationDialog from "../ConfirmationDialog";


const User = () => {
  const navigate = useNavigate();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const DashboardClick = () => {
    navigate("/dashboard");
  };
  const ReservationsClick = () => {
    navigate("/reservations");
  };
  const UserprofileClick = () => {
    navigate("/user-profile");
  };
  const LogOut = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmLogout = () => {
    setShowConfirmDialog(false);
    navigate("/");
  };

  const handleCancelLogout = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        {/* Sidebar with image that stays fixed */}
        <img src={dash3} alt="Dashboard Logo" className="sidebar-logo" />
        <ul>
          <li><BiSolidDashboard /> <a onClick={DashboardClick} className="item" href="#">Dashboard</a></li>
          <li> <FaBookmark /> <a onClick={ReservationsClick} className="item" href="#">Reservations</a></li>
          <li><FaUser /> <a onClick={UserprofileClick} className="item" href="#">User Profile</a></li>
          <li><BiSolidExit /><a onClick={LogOut} className="item" href="#">Log Out</a></li>
        </ul>
      </div>
      {showConfirmDialog && (
        <ConfirmationDialog
          confirmText="want to log out"
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      )}
      <div className="content">
        {/* This will contain the dynamic content */}
        {/* You can use React Router here to render specific components */}
      </div>
    </div>
  );
};

export default User;