import React, { useState } from "react";
import Tasklists from "../Components/Tasklists";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

function Dashboard() {
    return (
        <div className="flex flex-col h-screen">
            <NavBar></NavBar>
            <Tasklists></Tasklists>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;
