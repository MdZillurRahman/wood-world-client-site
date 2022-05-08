import React from 'react';
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Profile = ({ children }) => {
    const [user] = useAuthState(auth);

    if (user) {
        return (
            <div className='container rounded w-50 mx-auto mt-5 mb-5'>
                <img className='w-50 border border-dark d-block mx-auto my-2 rounded-circle' src={user.photoURL} alt="" />
                <h1>Name: {user.displayName}</h1>
                <h2>Email: {user.email}</h2>
            </div>
        );
    }
    return children;
};


export default Profile;