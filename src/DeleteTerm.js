
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from "./Button";

// import Modal from "react-modal";


const DeleteTerm = ({ token, termid, term, setTerm }) => {
    const history = useHistory();
    // const deleteTerm = (id) => {
    //     setTermIds(terms.filter((term) => term.id !== id))
    // }
    

    function handleClick(e) {
        e.preventDefault();
      
        if (!window.confirm("Are you sure you wish to delete?")) {
           return
        } 
            
       
        // console.log(JSON.stringify({ "termid": termIds }))
        fetch("https://wm2-glossary.herokuapp.com/api/terms/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ "termid": termid }),
        })
            .then((response) => response.json())
        // setTermIds(termIds.filter(term => term.id === e.target.id))
            .then((data) => {
                console.log(data);
                history.push("/");
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <div class="wrap">
            <Button type="submit" onClick={handleClick} >DELETE</Button> 
        </div>
    );
}
export default DeleteTerm;