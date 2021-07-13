import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import ReactDOM from 'react-dom';
// import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

// function MyEditor() {
//     const [editorState, setEditorState] = React.useState(
//         () => EditorState.createEmpty(),
//     );

//       return <Editor editorState={editorState} onChange={setEditorState} />;
// }


const AddNewTerm = ({ token, showBtn }) => {
    const [newTerm, setNewTerm] = useState("");
    const [definitions, setDefinitions] = useState("");
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );
   
    const history = useHistory();
    
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
                alert("New term has been added successfully" );
                history.push("/");
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
                alert("error occur new term is not added");
            })


    }

    return (
        <div className="AddTerm">
           
            {/* <div className={`${showBtn ? "active" : ""} show`}> */}
                 <form onSubmit={handleSubmit}>  
                 <label></label><br></br>TERM  
                             
                            <textarea  value={newTerm} onChange={(e) => setNewTerm(e.target.value)} />
                <label></label><br></br>Definition
                
                         <textarea value={definitions}
                              onChange={(e) => setDefinitions(e.target.value)} /> 
                           
                          
                    <input type="submit" value="Submit" />
                     
                 </form>
                 {/* <Editor editorState={editorState} onChange={setEditorState  */}
               
                          
                
            </div>
        // </div>
    )

}
export default AddNewTerm;