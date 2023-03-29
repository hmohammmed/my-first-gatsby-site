import { Link } from "gatsby";
import React, { PropsWithChildren } from "react"
import { ul } from './layout.module.css';
const Layout: React.FunctionComponent<PropsWithChildren & { pageTitle: string; }> = ({ children, pageTitle }) => {
	return (
		<>
			<nav>
				<ul className={ul}>
					<li><Link to="/" >Home</Link></li>
					<li><Link to="/about" >About</Link></li>
				</ul>
			</nav>
			<main>
				<h1>{pageTitle}</h1>
				{children}
			</main>
		</>
	)
};

export default Layout;
