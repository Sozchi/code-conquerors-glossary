import React, { useState } from 'react';
// import { terms } from './data';
const AddNewTerm = ({ token, showBtn }) => {
    const [newTerm, setNewTerm] = useState("");
    const [definitions, setDefinitions] = useState("");

    // const[languages, setLanguages]= useState("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log(JSON.stringify({ "term": newTerm, "definition": definitions, "userid": 1 }));
console.log(token);
        fetch("https://wm2-glossary.herokuapp.com/api/terms/add",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ "term": newTerm, "definition": definitions, "userid": 1 }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    return (
        <div className="AddTerm">
            {/* <div className={`${showBtn ? "active" : ""} show`}> */}
                <form onSubmit={handleSubmit}>
                <label></label><br></br>TERM
                        

                        <textarea value={newTerm} onChange={(e) => setNewTerm(e.target.value)} />

                    
                    
                <label></label><br></br>Definition
                
                        <textarea value={definitions}
                            onChange={(e) => setDefinitions(e.target.value)} />


                   
                    {/* <label>
                    <h5>languages</h5>
                    <input type=""
                        value={definitions}
                        onChange={(e) => setLanguages(e.target.value)}
                    />
                </label> */}
                    {/* <button type="submit">Add New Term</button> */}
                    <input type="submit" value="Submit" />
                </form>

            </div>
        // </div>
    )

}
export default AddNewTerm;