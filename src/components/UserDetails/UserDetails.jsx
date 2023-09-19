
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const {userId} = useParams();
    const {name, website, id} = user;

    console.log(userId);

    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <p>Id: {id}</p>
            <h2>Details about user: {name}</h2>
            <p>Website: {website}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;