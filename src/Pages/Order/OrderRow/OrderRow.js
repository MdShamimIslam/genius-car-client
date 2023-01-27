import React, { useEffect, useState } from 'react';

const OrderRow = ({order,handleDelete,handleStatusUpdate}) => {
    const {_id,customer,email,phone,serviceName,price,serviceId,status} = order;
    const [orderService,setOrderService] = useState({});

    useEffect(()=>{
        fetch(`https://genius-car-server-sooty-five.vercel.app/services/${serviceId}`)
        .then(res=>res.json())
        .then(data => setOrderService(data))
    },[serviceId])
    

    return (
                <tr>
                    <th>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{serviceName} </div>
                        <div className="text-sm opacity-50">Price: ${price}</div>
                        </div>
                    </div>
                    </td>
                    <td>
                       
                       {customer}
                    <br/>
                    <span className="badge badge-ghost badge-sm">Phone: {phone}</span>
                    </td>
                    <td>{email}</td>
                    <th>
                    <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
                    </th>
                </tr>
    );
};

export default OrderRow;