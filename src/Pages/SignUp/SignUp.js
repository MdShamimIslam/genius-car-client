import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authToken } from '../../api/auth';
import loginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const{createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        createUser(email,password)
        .then(result =>{
            const user =result.user;
            console.log(user);
            authToken(user);
        })
        .catch(error => console.error(error))

    }

    return (
        <div className="hero my-10">
            <div className="hero-content grid gap-16 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginImg } alt="" className='w-3/4'/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-14">
                <h1 className="text-4xl font-bold text-center mt-2">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary font-bold" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className=" text-center">
                        Already have an account ? <Link className='text-orange-600 font-bold' to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;