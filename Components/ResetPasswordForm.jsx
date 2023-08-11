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
        // <form onSubmit={handleSubmit}>
        //     <input
        //         type="password"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //     />
        //     <input
        //         type="password"
        //         value={password_confirmation}
        //         onChange={(e) => setPasswordConfirmation(e.target.value)}
        //     />
        //     <button type="submit">Reset Password</button>
        // </form>

        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">
                    Reset Your Password
                </h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                            New Password
                        </label>
                        <input
                            type="password"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            placeholder="Enter your new password"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            placeholder="Confirm your new password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResetPasswordForm;
