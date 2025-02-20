import React, { useState, useEffect } from 'react';

const SubscriptionComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const subscribeToData = () => {
      // Simulate a subscription to a data source
      const interval = setInterval(() => {
        setData(new Date().toLocaleTimeString());
      }, 1000);

      return () => clearInterval(interval); // Cleanup the subscription on component unmount
    };

    const unsubscribe = subscribeToData();

    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h3>Subscription Data</h3>
      <p>{data}</p>
    </div>
  );
};

export default SubscriptionComponent;



















// import React, {useState, useEffect} from 'react';

// const SubScriptionEffect = () => {

//     const [time, setTime] = useState(new Date().toLocaleDateString());

//     useEffect(() =>{
//         const interval = setInterval(() =>{
//             setTime(new Date().toLocaleDateString());
//         },1000);

//         return () => clearInterval(interval);
//     },[])

//     return(
//         <>
//         <h3>Current Time {time}</h3>

//         </>
//     )
// }

// export default SubScriptionEffect;