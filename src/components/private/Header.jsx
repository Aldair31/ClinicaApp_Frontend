import React from 'react';

const Header = ({usuario}) => {
	console.log(usuario)
	return (
		<>
			<div className="header_dashboard">
				<div className="contenedor">
					<h2>Clínica mi bebé</h2>
					<nav></nav>
				</div>
				{/* <div>rol</div> */}
			</div>
		</>
	);
};

export default Header;
