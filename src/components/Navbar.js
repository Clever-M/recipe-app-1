import React from 'react'
import PropTypes from 'prop-types'
import logo from '../logo.svg';
import Link from 'react-router-dom/Link';

const Navbar = ({searchString, updateSearchString}) => (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand col-1">
            <Link to="/">
                <img src={logo} className="Navbar-logo" alt="logo" />
            </Link>
        </div>

        <div className="form-group justify-content-center row col-10 my-2">
            <input
                value={searchString}
                onChange={(e) => updateSearchString(e)}
                className="form-control col-9 mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
        </div>
    </nav>
)

Navbar.propTypes = {
    searchString: PropTypes.string
}

export default Navbar;
