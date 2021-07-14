 import React from 'react';

 import Terms from './Terms';
 import AddNewTermBtn from "./AddNewTermBtn";
 import ReadMore from './ReadMore';
 


const HomePage = ({ search, setSearch, terms, handleLoginClick, token, }) => {
  return (
    <div className="home">
      
      {/* <SearchButton search={search} setSearch={setSearch} /> */}

      {/* <TermsTerm />    */}
      <Terms terms={terms} search={search} />
      {/* <AddNewTermBtn/> */}
      {token ?(<AddNewTermBtn handleLoginClick={handleLoginClick}/>) : null}
    </div>
  );
};
export default HomePage;