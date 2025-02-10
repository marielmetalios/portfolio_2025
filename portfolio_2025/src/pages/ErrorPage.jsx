import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div id="error-page">
            <h2>Sorry, this page does not exist...</h2>.
            <h2>Please return to home!</h2>
            {/* <p>
                {/* <i>{error.StatusText || error.Message}</i> */}
            {/* </p> */}
        </div>
    )
}

export default ErrorPage;