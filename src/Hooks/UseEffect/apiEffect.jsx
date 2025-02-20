import React, {useState, useEffect} from 'react';


function ApiEffect() {

    const [data, setData] = useState([]);
    const[loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
            setError('');
        })
        .catch(error => {
            setData([]);
            setLoading(false);
            setError('Error fetching data');
        })

    },[])


    return(
        <>
        <p>UseEffect</p>
        {loading ? 'Loading...' : data.map(user => <p key={user.id}>{user.name}</p>)}
        {error ? error : null}
        </>
    )
}

export default ApiEffect;

// import React, { useState, useEffect } from 'react';

// const ApiEffect = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//     const interval = setInterval(fetchData, 60000); // Update data every 60 seconds

//     return () => clearInterval(interval); // Cleanup the interval on component unmount
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ApiEffect;