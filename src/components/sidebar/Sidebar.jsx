import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartIcon from "@mui/icons-material/BarChart";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../DarkModeContext/DarkModeProvider";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SangramAdmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
        </ul>
        <ul>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimitsIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
        </ul>
        <ul>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
        </ul>
        <ul>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
        </ul>
        <ul>
          <p className="title">USEFUL</p>

          <li>
            <BarChartIcon className="icon" />
            <span>Stats</span>
          </li>
        </ul>
        <ul>
          <li>
            <CircleNotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
        </ul>
        <ul>
          <p className="title">SERVICE</p>

          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
        </ul>
        <ul>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
        </ul>
        <ul>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
        <ul>
          <p className="title">USER</p>

          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
        </ul>
        <ul>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
