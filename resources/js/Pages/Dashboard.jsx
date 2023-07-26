import React from "react";

function Dashboard() {
    return (
        <div>
            <form action="/logout" method="post">
                <button type="submit">logout</button>
            </form>
        </div>
    );
}

export default Dashboard;
