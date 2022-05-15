import React from "react";
import Header from "../../components/Header/Header";
import Mail from "../../components/Mail/Mail";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <>
      <Header></Header>
      <div className="w-full min-h-screen flex items-center relative">
        <Sidebar></Sidebar>
        <Mail></Mail>
      </div>
    </>
  );
}

export default Dashboard;
