import React from 'react';
import DevaisDetals from './DevaisDetels/DevaisDetals';




const Device = (props) => {
    console.log(props)
    return (
        <div>
            <h4>I have a device:{props.name}</h4>
           <DevaisDetals menu={props.price}></DevaisDetals>

        </div>
    );
};

export default Device;