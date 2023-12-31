import React, { useState, useEffect } from 'react';
import useUserData from '../hooks/useUserData';

const Dashboard = () => {

    const [userData] = useUserData();
    console.log(userData);
    return (
        <div>
            {/* {userData ? ( */}
                <div>
                    <h2>User Data:</h2>
                    {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
                </div>
            {/* ) : ( */}
                <p>Loading user data...</p>
            {/* )} */}
        </div>
    );
};

export default Dashboard;
