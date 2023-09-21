import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const{id,title} = post;
    const navigate = useNavigate();
    const userStyle ={
        border : '2px dotted green',
        padding : '10px',
        borderRadius : '20px'
    }
    const handleShowDetail = () =>
    {
       navigate(`/post/${id}`)
    }
    return (
        <div style={userStyle}>
             <p>Title:{title} </p>
            <Link to={`/post/${id}`}>Post details</Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;