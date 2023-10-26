import React, { useContext } from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import FChart from "../../components/FChart/FChart";
import List from "../../components/List/List";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="widgets">
          {" "}
          <Widget type="user" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Chart />
          <FChart aspect={3 / 1} title="Last 6 months revenue" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Transaction list</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
