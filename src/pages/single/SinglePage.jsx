import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./singlepage.scss";
import FChart from "../../components/FChart/FChart";
import List from "../../components/List/List";

const SinglePage = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="title">Information</div>
            <div className="editButton">Edit</div>
            <div className="item">
              <img
                className="itemImg"
                src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?size=626&ext=jpg"
              />
              <div className="details">
                <h1 className="itemTitle">John Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itmeValue">johnDoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itmeValue">8147402343</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address</span>
                  <span className="itmeValue">st Josef street, New York</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country</span>
                  <span className="itmeValue">America</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <FChart aspect={3 / 1} title=" Users last 6 monnths spending" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transaction</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
