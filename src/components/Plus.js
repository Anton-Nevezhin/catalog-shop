import React from "react";
import './plus.css';

const Plus = ({active, setActive, children}) => {
    return (
        <>
 
        <div className={active ? 'plus active' : 'plus'}>
            <div className={active ? 'plusContent active' : 'plusContent'}>
                {children}
                
            </div>
        </div>

                 {/* <div className={active ? 'plus active' : 'plus'} onClick={() => setActive(false)}>
             <div className={active ? 'plusContent active' : 'plusContent'} onClick={e => e.stopPropagation}>
                 {children}
                
             </div>
         </div> */}

        </>
)
}

export default Plus
