import { Link } from "react-router-dom";

function footer() {
    return (
        <div className ="flex lm-3 items-center p-4 bg-violet-900 text-white fixed bottom-0 left-0 w-full z-10 shadow-lg">
        <h2 >Thanks for visiting!</h2>
        <a href="https://www.linkedin.com/in/mariel-metalios-409a25102/">
                    <img src="../src/assets/linkedin.png"
                    className ="ml-4 h-5 w-5">
                    </img>
                </a>
                <a href="https://www.linkedin.com/in/mariel-metalios-409a25102/">
                    <img src="../src/assets/githubLogo.png"
                    className ="ml-4 h-5 w-5">
                    </img>
                </a>
        </div>
    )
}

export default footer;