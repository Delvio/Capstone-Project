import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

function ResetPasswordForm({ email, token }) {
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/reset-password", {
            email,
            token,
            password,
            password_confirmation,
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <button type="submit">Reset Password</button>
        </form>
    );
}

export default ResetPasswordForm;
