import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate;
    const {id,title,body} = post;
    const handleGoBack = () =>
    {
       navigate(-1);
    }
    return (
        <div>
            <h3>Post details about:{id} </h3>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;