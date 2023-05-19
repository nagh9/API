import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setListOfUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }, []);
  
    return (
      <>
        <h1>List of Users</h1>
        <div>
          {listOfUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </div>
        </>
    );
  };
  
  export default UserList;
  