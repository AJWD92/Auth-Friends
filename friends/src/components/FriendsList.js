import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import MakeFriend from './MakeFriend';
import FriendsCard from './FriendsCard';

 const FriendsList = () => {
    const [friendsData, setFriendsData] = useState([])

    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        axiosWithAuth()
        .get('friends')
        .then(res => {
            console.log(res.data)
            setFriendsData(res.data)
        })
        .catch(err => {
            console.log('No friends found here', err)
        })
    }, [isFetching])

    return (
        <div>
            <MakeFriend isFetching={isFetching} setIsFetching={setIsFetching} />
            <div className='wrapper'>
                <div className='container'>
                    {friendsData.map(friend => {
                        return <FriendsCard key={friend.id} friend={friend} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default FriendsList;