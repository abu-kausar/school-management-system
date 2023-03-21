import React, { useContext } from 'react';
import '../Login/StudentLogin.css';
import { useForm } from 'react-hook-form';
import bgImg from '../../Assets/img1.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit} = useForm();
    const {createUser} = useContext(AuthContext);

    const handleSignup = data => {
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            toast.success('user created successfully');
        })
    }

    return (
        <section className='design'>
            <div className="register">
                <div className="col-1">
                    <h2>Sign Up</h2>
                    <span>register and enjoy the service</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(handleSignup)}>
                        <input type="text" {...register("name")} placeholder='name' />
                        <input type="email" {...register("email")} placeholder='email' />
                        <input type="password" {...register("password")} placeholder='password' />
                        <button className='btn' type='submit'>Sign In</button>
                        <Link to="/studentLogin"><p>Already user? Go to Login Page</p></Link>
                    </form>

                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default SignUp;