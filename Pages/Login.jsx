import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Login() {
    return (
        <div className="flex flex-col h-screen">
            <NavBar></NavBar>
            <LoginForm></LoginForm>
            <Footer></Footer>
        </div>
    );
}

export default Login;
