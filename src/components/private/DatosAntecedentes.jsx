import React from 'react';
import useAfiliacion from '../../hooks/useAfiliacion';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../../sass/DatosF.sass';
import { BrowserRouter, Link,Switch, Route } from 'react-router-dom';
import FormFiliacion from './extras/FormFiliacion';
import Antecedentes from './Antecedentes';
//MARQUITO QUIERE QUE HAGAS UN SORTEO :V
//TU PATITA MEMERSON
const DatosAntecedentes = () => {
	const [datos_af, loading] = useAfiliacion();
	const { id } = useParams()
	return (
		<div>
			{loading === false ? (
				<div className="">
					{datos_af
						.filter((item) => item._id === id)
						.map((item) => (
							<>
								
								<Antecedentes id={id} />
								{/* <BrowserRouter>
								<Switch>
										<Route path="/antecedentes/:id">
											
											<Antecedentes id={item._id}/>
											
							
										</Route>
									</Switch>
								</BrowserRouter> */}
									
								
								
								
							</>
						))}
				</div>
			) : null}
			<>
			
								
			</>
		</div>
	);
};

export default DatosAntecedentes;
