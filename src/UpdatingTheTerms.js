import React, { useEffect, useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";

export default function UpdatingTheTerms({ token, term, updateTerm }) {
    // const [termId, setTermId] = useState(term.termid);
    const [terms, setTerms] = useState(term.term);
    const [definitions, setDefinitions] = useState(term.definition);
    const [show, setShow] = useState(false);
    const [editing, setEditing] = useState(false);
    // const initialFormState = { id: null, term: '', definition: '' };
    // const [currentTerm, setCurrentTerm] = useState(initialFormState);
useEffect(()=>{
setTerms(term.term)
setDefinitions(term.definition);
},[term]);
    const edit = (term) => {
        console.log(term)
        setEditing(true)
        // setCurrentTerm({ termid: term.termid, term: term.term, definition: term.definition })
    }

    function handleSubmit(e) {
        e.preventDefault();
        // updateTerm(term.id, terms, definitions)
        const body = JSON.stringify({ "termid": term.termid, "term": terms, "definition": definitions });
        console.log(body);
        fetch("https://wm2-glossary.herokuapp.com/api/terms/update",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: body,
            })
            .then((response) => response.json())
            // .then((data) => setToken(data.auth))
            .then((data) => {
                console.log(data);
                setShow(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    console.log(term);

    return (
        <React.Fragment>
    <div
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          height: "20vh"
        }}
      >
    
        <Button onClick={() => {setShow(true); (edit(term))}} >EDIT</Button>
   
      </div>
      <Modal show={show} onClose={() => setShow(false)}>
        <div className="update">
            <form onSubmit={handleSubmit}>
                <label>Update Term </label> <br></br>Term:
                <textarea value={terms} onChange={(e) => setTerms(e.target.value)} />
                <label></label> <br></br>Definition: 
                <textarea value={definitions} onChange={(e) => setDefinitions(e.target.value)} />
                <br></br>
                {/* <label> </label>TermId:
                <input type="text" value={term.termid} onChange={(e) => setTermId(e.target.value)} /> */}
                <button type="submit">SAVE</button>
            </form>
        </div>
          </Modal>
    </React.Fragment >
    );

}