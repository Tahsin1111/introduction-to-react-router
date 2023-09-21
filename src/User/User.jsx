import { Link } from "react-router-dom";


const User = ({user}) => {
    const{id,name,email,phone} = user;
    const userStyle ={
        border : '2px dotted green',
        padding : '10px',
        borderRadius : '20px'
    }
    return (
        <div style={userStyle}>
            <h5>id :{id}</h5>
            <h3> Name : {name}</h3>
            <p> Email : {email}</p>
            <p> Phone no : {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;