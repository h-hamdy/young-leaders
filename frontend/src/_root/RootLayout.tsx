import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';


const RootLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchLoginStatus = async () => {
        try {
            const response = await axios.get('http://localhost:8000/check-login', {withCredentials: true});
            console.log(response.data.logged_in);
            if (response.status === 200) {
                if (!response.data.logged_in)
                    navigate("/sign-up")
            }
        } catch (error) {
            console.error('Error fetching login status:', error);
        }
    };

    fetchLoginStatus();
}, []);

  return (
    <div>RootLayout</div>
  );
}

export default RootLayout;
