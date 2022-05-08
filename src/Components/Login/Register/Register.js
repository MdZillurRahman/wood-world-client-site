import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../Social Login/SocialLogin';
import Logo from '../../../Images/icon-register.png';
import './Register.css'

const Register = () => {
    const [agree, setAgree] = useState(false);

    const nameRef = useRef('');
    const photoURLRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const photoURL = photoURLRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name, photoURL: photoURL});
        navigate('/home');
    }

    if (loading) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate('/home');
    }

    const navigateToLogIn = () => {
        navigate('/login');
    }

    return (
        <div className='bg-info p-5'>
            <div className='container rounded mx-auto responsive'>
                <img className='w-25 my-3 d-block mx-auto' src={Logo} alt="" />
                <h2 className='text-dark text-center mb-5'>Register</h2>
                <SocialLogin></SocialLogin>
                <Form className='w-75 mx-auto' onSubmit={handleRegister}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control ref={photoURLRef} type="text" placeholder="Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Terms And Condition" />
                    </Form.Group>
                    <Button disabled={!agree} variant="primary" type="submit" className='w-50 mx-auto my-4 d-block align-center'>
                        Register
                    </Button>
                    <p>Already Have an Account? <Link to={"/login"} className='text-danger pe-auto text-decoration-none' onClick={navigateToLogIn}>Please LogIn</Link></p>
                </Form>
            </div>
        </div>

    );
};

export default Register; 