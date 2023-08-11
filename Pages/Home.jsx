import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

// the purpose of this file is to show how to import a component into a Page file so it can be rendered
function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar></NavBar>
            <div className="flex flex-col items-center justify-center bg-blue-500 text-white text-center py-8">
                <h1 className="text-4xl font-bold">Welcome to Check It</h1>
                <p className="mt-2">Your Ultimate Task List Management App</p>
            </div>
            <div id="get-started" className="flex-grow bg-gray-200 py-8"></div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
