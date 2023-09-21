import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>oopssss</h2>
            <p>{error.statusText|| error.message}</p>
          
        </div>
    );
};

export default ErrorPage;