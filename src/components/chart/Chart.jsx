import React from "react";
import "./chart.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
const Chart = () => {
  return (
    <div className="chart">
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <CircularProgressbar text="70%" value={70} className="featuredChart" />
        <div className="title">Total sales made today</div>
        <p className="amount">$200</p>
        <p className="desc">Last transcation is being processed</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$20</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$20</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
