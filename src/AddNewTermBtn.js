import React from 'react';
import { useHistory } from 'react-router-dom';
function AddNewTermBtn({ handleLoginClick}) {
    const history = useHistory();

    const handleClick = () => {
        console.log("handleClick");
        history.push(`/addNewTerm`);
    }

    
   
    return (
        <div className="update">
            <div>
                {/* <span onClick={handleClick} className="icon">ADD NEW TERM</span> */}
                <a href={`/addNewTerm`}>ADD NEW TERM</a>
                
            </div>
        </div>
    )
}
export default AddNewTermBtn;