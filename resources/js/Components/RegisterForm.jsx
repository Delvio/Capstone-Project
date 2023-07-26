import React, { useState } from "react";
import { router } from "@inertiajs/react";

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/register", {
            name: name,
            email: email,
            password: password,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name:
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </div>
            <label>
                Email:
                <input
                    className="flex"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                Password:
                <input
                    className="flex"
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;
