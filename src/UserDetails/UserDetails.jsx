import { useLoaderData } from "react-router-dom";



const UserDetails = () => {
  const user = useLoaderData();  
    const {name} = user;
    return (
        <div>
            <h3>details about user: {name}</h3>
        </div>
    );
};

export default UserDetails;