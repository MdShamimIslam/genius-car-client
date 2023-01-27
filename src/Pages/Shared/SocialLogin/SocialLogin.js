import React, { useContext } from 'react';
import { authToken } from '../../../api/auth';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const handleGoogle = ()=>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            authToken(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='text-center mt-6'>
            <button onClick={handleGoogle} className="btn btn-wide">Google Sign in</button>
        </div>
    );
};

export default SocialLogin;