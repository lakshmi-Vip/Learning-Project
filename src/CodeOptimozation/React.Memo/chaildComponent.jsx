import React from 'react';

const ChaildComponent = React.memo(({name1}) =>{
    console.log('Rendering chaild component');
    return(
        <div>
            <h1>Child Component</h1>
            <p>Text{name1}</p>
        </div>
    )
})

export default ChaildComponent;