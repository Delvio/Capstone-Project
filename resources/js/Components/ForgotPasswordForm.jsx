import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

function ForgotPasswordForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/forgot-password", { email });
    };
    return (
        // <form onSubmit={handleSubmit}>
        //     <label htmlFor="email">Email Address</label>
        //     <input
        //         type="email"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //     />
        //     <button type="submit">Reset Password</button>
        // </form>

        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">
                    Forgot Your Password?
                </h2>
                <p className="text-gray-600 mb-4">
                    Enter your email address and we'll send you instructions to
                    reset your password.
                </p>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                        >
                            Send Reset Instructions
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordForm;
