

const User = ({user}) => {
    const{id,name,email,phone} = user;
    const userStyle ={
        border : '2px dotted orange',
        padding : '10px',
        borderRadius : '20px'
    }
    return (
        <div style={userStyle}>
            <h5>id :{id}</h5>
            <h3> Name : {name}</h3>
            <p> Email : {email}</p>
            <p> Phone no : {phone}</p>
        </div>
    );
};

export default User;