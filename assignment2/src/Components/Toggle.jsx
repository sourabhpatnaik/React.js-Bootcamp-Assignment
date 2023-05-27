import { useState } from 'react';

const Toggle = () => {

    const [active, setActive] = useState(false);
    const handleClick = () =>{
        setActive(!active);
    };
    
    return(
        
        <div className='back' style={{background:active ? "blue" : "purple"}}>
       
          <button onClick={handleClick}>Toggle</button>
       
        </div>
    )
};

export default Toggle;