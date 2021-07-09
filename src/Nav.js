import React from "react";
import { BrowserRouter} from "react-router-dom";

import Login from './Login';
import AddNewTermBtn from './AddNewTermBtn';


const Nav = ({ setToken, open, setOpen, token, handleLoginClick, showBtn, setShowBtn }) =>
{
  
  
    return (
      <BrowserRouter>
        <nav className="">
          <a href="/">
          <img
             src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png" 
             alt="" 
             />
          </a>
          {/* </Link> */}
          <div className="mission">
            This Is Code Your Future Glossary.
            You Can find Terms And Their
            Definition, Including Resources (Videos,Links and Images) For
            Further Learning.
          </div>
          <Login setToken={setToken} open={open} setOpen={setOpen} token={token}/>
         {token ? (<AddNewTermBtn token={token}/>) : null}
         
        </nav>
      </BrowserRouter>
    );
}

export default Nav;