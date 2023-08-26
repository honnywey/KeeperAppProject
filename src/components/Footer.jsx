import React from "react";

function App() {

    const date = new Date().getFullYear();
    
    return (
        <footer>
            <p>Copyright {date}</p>
        </footer>
    )
}

export default App;