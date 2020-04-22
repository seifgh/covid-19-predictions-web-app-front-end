// libraries
import React, { useState } from 'react';
import {
  Link,
  NavLink
} from "react-router-dom";


function Aside() {
  // responsivity
  const [ displayMenu, setDisplayMenu ] = useState(false);

  return (
    
    <aside className="">
      <div className="top-bar">
      	<Link to="/" className="logo">
      		<h1>COVID-19</h1>
      		<div>
      			<h3>AI PREDICTIONS</h3>
      		</div>
      	</Link>

        <div onClick={ () => setDisplayMenu(!displayMenu) } className={`icon-menu${displayMenu ? ' active':''}`}><i className="fa fa-stream"  /></div>
       
      </div>
    	<div className={`links${displayMenu ? ' show':''}`}>
    		<NavLink onClick={ () => setDisplayMenu(!displayMenu) }  activeClassName="link active" className="link" exact to="/" > <i className="fas fa-home"/> Home</NavLink>
    		<NavLink onClick={ () => setDisplayMenu(!displayMenu) }  activeClassName="link active" className="link" to="/predictions" > <i className="fa fa-chart-line"/> Predictions</NavLink>
        <NavLink onClick={ () => setDisplayMenu(!displayMenu) }  activeClassName="link active" className="link" to="/resources" > <i className="fa fa-file-alt"/> Resources</NavLink>

        <NavLink onClick={ () => setDisplayMenu(!displayMenu) }  activeClassName="link active" className="link" to="/about" > <i className="fas fa-question-circle"/> About us</NavLink>
    	  

      </div>
    </aside>

  );
}

//<h3>AI</h3> <h3>predictions</h3>


export default Aside;
