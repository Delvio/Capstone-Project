import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

function ForgotPasswordForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/forgot-password", { email });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Reset Password</button>
        </form>
    );
}

export default ForgotPasswordForm;
