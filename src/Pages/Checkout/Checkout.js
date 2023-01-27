import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {title,price,_id}= useLoaderData();
    const {user} = useContext(AuthContext);

    const handleOrderPlace = event => {
        event.preventDefault();
        const form = event.target;
        const name =  `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'Unregister';
        const message = form.message.value;

        const orders = {
            serviceId : _id,
            serviceName : title,
            customer : name,
            phone,
            price,
            email,
            message
        }

        fetch('https://genius-car-server-sooty-five.vercel.app/orders',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body:JSON.stringify(orders)
        })
            .then(res=>res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    alert('Order placed successfully');
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }

    return (
        <div className='mb-12'>
            <h3 className="text-4xl">You ordered : {title}</h3>
            <h4 className="text-3xl">Price : ${price}</h4>
            <form onSubmit={handleOrderPlace}>
                <div className='grid grid-cols-1 lg:grid-cols-2 mb-5'>
                    <input name="firstName" type="text" placeholder="First name" className="input input-bordered input-primary w-full mb-5"/>
                    <input name="lastName" type="text" placeholder="Last name" className="input input-bordered input-primary w-full mb-5"/>
                    <input name="phone" type="text" placeholder="Your phone" className="input input-bordered input-primary w-full mb-5" required/>
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered input-primary w-full mb-5" readOnly required/>
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full h-24" placeholder="Your message"></textarea>
                <button className="btn btn-secondary mt-3">Button</button>
            </form>
        </div>
    );
};

export default Checkout;