import React from 'react';
import google from '../../../Images/social/google.png';
import facebook from '../../../Images/social/facebook.png';
import github from '../../../Images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    
    let errorElement;

    if(googleLoading || gitHubLoading){
        return <Loading></Loading>;
    }

    if (googleError || gitHubError) {
        errorElement = <p className='text-danger'>Error: PopUp Closed By User</p>
    }

    if (googleUser || gitHubUser) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex'>
            <button onClick={() => signInWithGoogle()}
                    className='btn btn-info d-block my-2 w-25'>
                    <img className='mx-auto' style={{ width: '30px' }} src={google} alt="" />
                </button>
            <button
                    className='btn btn-info d-block mx-auto my-2 w-25'>
                    <img className='mx-auto' style={{ width: '30px' }} src={facebook} alt="" />
                </button>
            <button onClick={() => signInWithGithub()}
                    className='btn btn-info d-block my-2 w-25'>
                    <img className='mx-auto' style={{ width: '30px' }} src={github} alt="" />
                </button>
            </div>
            {errorElement}
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <h3 className=' px-4'>or</h3>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
        </div>
    );
};

export default SocialLogin;