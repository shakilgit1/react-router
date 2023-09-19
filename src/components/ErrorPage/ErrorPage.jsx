import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>{error.statusText || error.message}</h2>
            {
              error.status === 404 && <div>
                <p>Page not found</p>
                <p>Go back where you from</p>
                <Link to="/"><button>Go back</button></Link>
              </div>
            }
        </div>
    );
};

export default ErrorPage;