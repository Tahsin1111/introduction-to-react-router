import { Link } from "react-router-dom";


const Post = ({post}) => {
    const{id,title} = post;
    const userStyle ={
        border : '2px dotted green',
        padding : '10px',
        borderRadius : '20px'
    }
    return (
        <div style={userStyle}>
             <p>Title:{title} </p>
            <Link to={`/post/${id}`}>Post details</Link>
        </div>
    );
};

export default Post;