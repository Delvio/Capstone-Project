import React from "react";

// the purpose of this file is to show how to import a component into a Page file so it can be rendered
function Home() {
    return (
        <div>
            <div>Home</div>
            <div>
                <a href="/register">register</a>
            </div>

            <div>
                <a href="/dashboard">dashboard</a>
            </div>
            <div>
                <a href="/login">login</a>
            </div>
        </div>
    );
}

export default Home;
