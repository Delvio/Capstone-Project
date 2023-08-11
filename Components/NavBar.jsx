import React from "react";

function NavBar() {
    return (
        <div>
            <div class="bg-blue-500 p-4">
                <div class="container mx-auto flex justify-between items-center">
                    <a href="#" class="text-white text-xl font-semibold">
                        Check It
                    </a>
                    <div class="md:hidden">
                        <button id="menu-toggle" class="text-white">
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div class="hidden md:flex space-x-4">
                        <a href="/" class="text-white">
                            Home
                        </a>
                        <a href="/register" class="text-white">
                            Register
                        </a>
                        <a href="/login" class="text-white">
                            Log In
                        </a>
                        <a href="/tasklist" class="text-white">
                            Dashboard
                        </a>
                        <a href="/logout" class="text-white">
                            Log Out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
