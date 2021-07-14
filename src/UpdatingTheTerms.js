import React, { useEffect, useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";

export default function UpdatingTheTerms({ token, term, onClose }) {
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
      <Modal show={show} onClose={() => setShow(true)}>
        <div className="update">
            <form onSubmit={handleSubmit}>
                <h2>Update Term</h2>
                <label></label> <br></br>Term
                <textarea value={terms} onChange={(e) => setTerms(e.target.value)} />
                <label></label> <br></br>Definition 
                <textarea value={definitions} onChange={(e) => setDefinitions(e.target.value)} />
                
                <  Button
                    onClick={onClose}
                    style={{
                        width: 60,
                        height: 40,
                        position: "fixed",
                        top: 0,
                        right: 0,
                        margin: "1rem",
                        cursor: "pointer",
                        
                    }}
                //     className={styles.close__btn}
                 >
                  
          Close
        </Button> 
                {/* <label> </label>TermId:
                <input type="text" value={term.termid} onChange={(e) => setTermId(e.target.value)} /> */}
                <button type="submit" id="button4">SAVE</button>
            </form>
        </div>
          </Modal>
    </React.Fragment >
    );

}