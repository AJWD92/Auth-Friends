import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

 const Friends = () => {
     const [pals, setPals] = useState({
         friends: []
     })

     useEffect(() => {
         axiosWithAuth()
         .get(`friends`)
         .then(res => {
             console.log(res);
             setPals(res.data);
         })
         .catch(err => console.log('use: ', err));
     }, []);

    return (
        <div className='friendCard'>
            <h1>{pals.friends}</h1>
        </div>
    )
}

export default Friends