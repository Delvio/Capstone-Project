import React from "react";
import Test
    from "../Components/Test.jsx";

// the purpose of this file is to show how to import a component into a Page file so it can be rendered
function Home() {
    return <div><div>
        Home
    </div>
        <Test/>
    </div>;
}

export default Home;
