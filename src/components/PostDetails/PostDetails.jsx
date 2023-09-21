import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body} = post;
    return (
        <div>
            <h3>Post details about:{id} </h3>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;