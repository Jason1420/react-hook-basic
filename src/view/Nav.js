import './Nav.scss'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="active" to="/" exact>Home</NavLink>
            <NavLink activeClassName="active" to="/todo">Todo</NavLink>
            <NavLink activeClassName="active" to="/data">Data</NavLink>
            <NavLink activeClassName="active" to="/timer">Timer</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
        </div>
    )
}
export default Nav;