import React from "react";
import ResetPasswordForm from "../Components/ResetPasswordForm";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function ResetPassword({ email, token }) {
    return (
        <div className="flex flex-col h-screen">
            <NavBar></NavBar>
            <ResetPasswordForm email={email} token={token} />
            <Footer></Footer>
        </div>
    );
}

export default ResetPassword;
