import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import logo from '../navbar/images/logo.png'

function NavBar(){
    return(
        
        <nav className='nav'>
            <a>
            <img src= {logo} alt="Be Aware Everywhere logo" width={300} height={200}/>
            </a>
        <ul>
            <li>
                <CustomLink to='/'>Home</CustomLink>
            </li>
            <li>
                <CustomLink to='/about'>About</CustomLink>
            </li>
            <li>
                <CustomLink to='/data'>Crime Reports</CustomLink>
            </li>
            <li>
                <CustomLink to='/safety'>Travel Tips</CustomLink>
            </li>
            <li>
                <CustomLink to='/report'>Report a Crime</CustomLink>
            </li>     
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