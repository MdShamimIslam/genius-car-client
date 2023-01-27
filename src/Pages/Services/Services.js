import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('https://genius-car-server-sooty-five.vercel.app/services')
         .then(res => res.json())
         .then(data => setServices(data))
    },[])
    

    return (
        <div>
            <div>
                <h2 className="text-4xl text-orange-600 text-center font-bold">Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16'>
                {
                    services.map( service => <Service 
                        key={service._id}
                        service ={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;