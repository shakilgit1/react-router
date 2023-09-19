import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    
    return (
        <div>
          <h2>This is users: {users.length}</h2> 
          <p>Fantastic users from us </p>
          <div className="user">
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
          </div>
        </div>
    );
};

export default Users;