import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";
import DeleteTerm from './DeleteTerm';
import UpdatingTheTerms from './UpdatingTheTerms';


const SingleTermPage = ({setToken, token, terms}) => {

    let { id } = useParams();
    const [term, setTerm] = useState({});
    //  function handleSubmit(e) {
    //     e.preventDefault();
    // }
    useEffect(() => {
        const getTerm = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "termid": id,
            })
        };
        fetch("https://wm2-glossary.herokuapp.com/api/terms/term", getTerm)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTerm(data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    function embed(resource) {
        let item;
        if (resource.type === "web") {
            item = <li key={resource.resid}><a href={resource.link}
                target="_blank" rel="noreferrer">{resource.link}</a></li>;
        } else {
            item = <YoutubeEmbed embedUrl={resource.link} />;
        }
        return item;
    }
    // const updateTerm = (id, termname, definitions) => {
    //     setTerm( { ...term, term: termname, definition: definitions });
    //     terms.map((t) => (t.id === id ? term : t))
    // }

    return (
        <div>
            {/* <Nav setToken={setToken} token={token}/> */}
            <div>
                {/* <h5>{term.termid}</h5> */}
                <h2>{term.term}</h2>
                <p>{term.definition}</p>
                <ul>
                    {
                        term.resources ? (

                            term.resources.map((resource) => {

                                console.log(term.resources)
                                return (<li key={resource.resid}>
                                    {embed(resource)}</li>)

                            })
                        )
                            : <h4>There are no resources</h4>

                    }
                </ul>
                {token ? (<DeleteTerm token={token} termid={term.termid}/>) : null}
                {token ? (<UpdatingTheTerms token={token} term={term}  />) : null}
                {/* {token ? (<button>hello</button>) : null} */}
            </div>
        </div>
    )
};
export default SingleTermPage;