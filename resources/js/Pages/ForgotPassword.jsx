import React from "react";
import ForgotPasswordForm from "../Components/ForgotPasswordForm";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function ForgotPassword() {
    return (
        <div className="flex flex-col h-screen">
            <NavBar></NavBar>
            <ForgotPasswordForm />
            <Footer></Footer>
        </div>
    );
}

export default ForgotPassword;
