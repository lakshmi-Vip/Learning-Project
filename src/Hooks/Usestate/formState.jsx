import React, { useState } from 'react';

const FormState = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState({});

  
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      email,
      username,
      firstName,
      lastName,
      password,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Username:</label>
          <input type='text' value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>First Name:</label>
          <input type='text' value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type='text' value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type='password' value={password} onChange={handlePasswordChange} />
        </div>
        <button type='submit'>Sign In</button>
      </form>
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Email: {submittedData.email}</p>
          <p>Username: {submittedData.username}</p>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </>
  );
};

export default FormState;