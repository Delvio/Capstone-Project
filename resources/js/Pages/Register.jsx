import React from "react";
import RegisterForm from "../Components/RegisterForm";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Register() {
    return (
        <div className="flex flex-col h-screen">
            <NavBar></NavBar>
            <RegisterForm></RegisterForm>
            <Footer></Footer>
        </div>
    );
}

export default Register;
