import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow/OrderRow';

const Order = () => {
    const {user,logOut} = useContext(AuthContext);
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch(`https://genius-car-server-sooty-five.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
        .then( res => {
            if(res.status === 401 || res.status === 403){
                return logOut();
            }
            return res.json();
        })
        .then( data => setOrders(data))

    },[user?.email])

    const handleDelete = (id)=>{
        const proceed = window.confirm('Are you sure? You want to delete this order');

        if(proceed){
            fetch(`https://genius-car-server-sooty-five.vercel.app/orders/${id}`,{
            method:'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
            })
            .then(res => res.json())
            .then( data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })

            }

    }

    const handleStatusUpdate = id =>{
        fetch(`https://genius-car-server-sooty-five.vercel.app/orders/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body:JSON.stringify({status:'approved'})
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('Updated Successfully');
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find (odr => odr._id == id);
                approving.status = 'approved';
                const newOrders=[approving,...remaining];
                setOrders(newOrders);
            }
        })
    }

    return (
            <div className="overflow-x-auto w-full mb-10">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Service & Price</th>
                        <th>Customer-name& Phone</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map( order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        
    );
};

export default Order;