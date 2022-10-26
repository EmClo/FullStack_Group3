import {Link, useMatch, useResolvedPath} from 'react-router-dom';

function NavBar(){
    return(
        <nav className='nav'>
        <ul>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/data'>Crime Reports</CustomLink>
            <CustomLink to='/safety'>Travel Tips</CustomLink>
            <CustomLink to='/report'>Report a Crime</CustomLink>       
        </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return(
    <li className={isActive ? 'active' : ''}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
    )
}

export default NavBar;