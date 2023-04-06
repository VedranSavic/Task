import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/search-bar';
import UsersTable from './components/users-table/indes';
import { TableRowData, UserType } from './types/types';
import { Column } from 'react-table';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {response.json().then(data => {
      setUsers(data);
      setFilteredUsers(data);
  })})
  },[]);

  useEffect(() => {
    if(userInput == ""){
      setFilteredUsers(users);
    }else {
      setFilteredUsers(users.filter((user: UserType) => {
        return user.address.city.toLowerCase().includes(userInput.toLowerCase());
      }))
    }
  }, [userInput]);

  return (
    <div className="App">
      <SearchBar setUserInput={setUserInput} userInput={userInput}/>
      <UsersTable users={filteredUsers}/>
    </div>
  );
}

export default App;
