import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../Social Login/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import Logo from '../../../Images/logIn.png';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const handleLogIn = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('https://thawing-badlands-17734.herokuapp.com/login', {email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    const navigateToRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div className='color p-5 '>
            <div className='container rounded mx-auto responsive'>
                <img className='w-25 my-3 d-block mx-auto' src={Logo} alt="" />
                <h2 className='text-dark text-center h1 mb-5'>Login</h2>
                <SocialLogin></SocialLogin>
                <Form className='w-75 mx-auto' onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p><button className='btn btn-link text-danger pe-auto text-decoration-none me-1 mx-auto d-block' onClick={resetPassword}>Forget Password? </button></p>
                    <Button type="submit" className='btn-color w-50 mx-auto my-4 d-block align-center'>
                        Log In
                    </Button>
                    {errorElement}
                    <p>New Here? <Link to={"/register"} className='text-danger pe-auto text-decoration-none mt-2' onClick={navigateToRegister}>Please Register</Link></p>
                    
                </Form>
                <ToastContainer />
            </div>
        </div>

    );
};

export default Login;