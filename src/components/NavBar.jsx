import { Link, useMatch, useResolvedPath } from "react-router-dom"
 
export default function NavBar(){
	return (

		<nav>
			
			<h1>Logo</h1>


			<ul>
				<CustomLink className="link" to="/home">home</CustomLink>
				<CustomLink className="link" to="/about">about</CustomLink>
				<CustomLink className="link" to="/contact">contact</CustomLink>
			</ul>

		</nav>

		)
}



function CustomLink({to, children, ...props}){
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({path: resolvedPath.pathname, end:true})

	return(

		<li className={isActive? "active": ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>

		)
}