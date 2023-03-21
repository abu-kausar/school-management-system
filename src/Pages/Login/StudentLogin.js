import React, { useContext } from 'react';
import './StudentLogin.css';
import { useForm } from 'react-hook-form';
import bgImg from '../../Assets/img1.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const StudentLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {loginUser} = useContext(AuthContext);

    const handleSignin = data => {
        loginUser(data.email, data.password)
        .then(data => {
            const user = data.user;
            console.log(user);
            toast.success('logged in successfully')
        })
    };

    return (
        <section className='design'>
            <div className="register">
                <div className="col-1">
                    <h2>Sign In</h2>
                    <span>Sign In and Enjoy the service</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(handleSignin)}>
                        <input type="email" {...register("email")} placeholder='email' />
                        <input type="password" {...register("password")} placeholder='password' />
                        {/* <input type="text" {...register("mobile", { required: true, maxLength: 10 })} placeholder='mobile number' />
                        {errors.mobile?.type === "required" && "Mobile Number is required"}
                        {errors.mobile?.type === "maxLength" && "Max Length Exceed"} */}
                        <button className='btn'>Sign In</button>
                        <Link to="/signup"><p>New user? Go to Signup</p></Link>
                    </form>

                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default StudentLogin;