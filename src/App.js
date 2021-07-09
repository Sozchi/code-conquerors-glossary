

import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResourcesPage from "./ResourcesPage"
import Terms from './Terms';
import SingleTermPage from './SingleTermPage';
import TermPage from './TermPage';
import AddNewTerm from './AddNewTerm';
import Nav from "./Nav";


// const useStateWithLocalStorage = localStorageKey => {
//   const [token, setToken] = React.useState(
//     localStorage.getItem(localStorageKey) || ''
//   );

//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, token);
//   }, [token]);

//   return[token, setToken];
// };

function App() {
  
  // const userid="";
  const API = "https://wm2-glossary.herokuapp.com/api";
  const [search, setSearch] = useState("");
  const [terms, setTerms] = useState([]);
  const [token, setToken] = useState("")
  // const [token, setToken] = useStateWithLocalStorage(
  //   'myValueInLocalStorage'
  // );
  const [showBtn, setShowBtn] = useState(true);
  //  const [open, setOpen] = useState(true);

  
// only one contributor can login and save token to local storage for now.
  
  React.useEffect(() => { 
    const parsedCount =(localStorage.getItem("token") || "")
    setToken(parsedCount)
  }, [])

  React.useEffect(() => {
    localStorage.setItem("token", token)
  }, [token])


  
  
  const handleLoginClick = () => {

    setShowBtn((showBtn) => !showBtn)
  };

  useEffect(() => {
    fetch("https://wm2-glossary.herokuapp.com/api/terms/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTerms(data)
      })
      .catch(function (error) {
        console.log(error);
      })

  }, []);


  return (

    <div className="wrapper" id="main">
      <Nav setToken={setToken} token={token} handleLoginClick={handleLoginClick} />
      <BrowserRouter>
        <Switch>
         
          <Route  exact path="/singleTermPage/:id" component={SingleTermPage} >
            <SingleTermPage setToken={setToken} token={token} terms={terms}/>
          </Route>
          <Route exact path="/addNewTerm" component={AddNewTerm}>
            <AddNewTerm API={API} token={token} setToken={setToken} />
            {/* <Route path="/contributorPage/:userid" component={ContributorPage}> */}
            {/* <ContributorPage open={open} setOpen={setOpen} token={token} handleLoginClick={handleLoginClick} showBtn={showBtn} setToken={setToken} API={API} /> */}
          </Route>
          <Route exact path="/resourcesPage">
            <ResourcesPage API={API} token={token} setToken={setToken} />
          </Route>
          <Route exact path="/termPage">
            <TermPage setToken={setToken} token={token} showBtn={showBtn} handleLoginClick={handleLoginClick} />
          </Route>
          <Route exact path="/">
            <Terms terms={terms} search={search} setSearch={setSearch} setToken={setToken} token={token}/> 
          </Route>
        </Switch>
      </BrowserRouter>

    </div>

  );
}

export default App;
