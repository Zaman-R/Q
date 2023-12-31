import { useState, useEffect } from 'react';

const useUserData = () => {
    const [userData, setUserData] = useState(null);

    const gettingData = async () => {
        await fetch("/user.json")
        // `/users/${email}` local storage theke nibo
            .then(data => data.json())
            .then(data => setUserData(data[1]))
    }
    useEffect(() => {
        gettingData();
    }, []);




    return [userData];
};

export default useUserData;