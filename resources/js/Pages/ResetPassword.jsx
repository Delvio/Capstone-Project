import React from "react";
import ResetPasswordForm from "../Components/ResetPasswordForm";

function ResetPassword({ email, token }) {
    return (
        <div>
            <h1>Reset Password</h1>
            <ResetPasswordForm email={email} token={token} />
        </div>
    );
}

export default ResetPassword;
