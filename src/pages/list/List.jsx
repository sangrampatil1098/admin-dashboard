import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";
import DataTable from "../../components/dataTable/DataTable";
const List = ({ page, title }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable page={page} title={title} />
      </div>
    </div>
  );
};

export default List;
