import React from 'react';
import { Link } from 'react-router-dom';

// sets up nav bar using bootstrap:
// https://getbootstrap.com/docs/4.0/components/navbar/

// replaced anchor tags with JSX Link tags
// added onClick for Links to '/' in order to clear state
function Nav(props) {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link onClick={props.clearRecipes} className="navbar-brand" to="/">Res-IP</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link onClick={props.clearRecipes} className="nav-item nav-link active" to="/">Search</Link>
            <Link className="nav-item nav-link active" to="/list">Groceries</Link>
        </div>
      </div>
    </nav>
    )
}
export default Nav;