import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const navigate = useNavigate();

    const style = {
        border: '2px solid tomato',
        padding: '10px',
        borderRadius: '20px'
    }

    const handleSeeMore = () =>{
        navigate(`/user/${id}`)
    }

    return (
        <div style={style}>
            <h2>{name}</h2>
            <p>Id: {id}</p>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
            <div>
            <button onClick={handleSeeMore}>See More Details</button>
            </div>
           </div>
    );
};

export default User;