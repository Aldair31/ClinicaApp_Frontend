import React, { useState } from 'react';
import '../../sass/Dashboard.sass';
import '../../sass/ModalPaciente.sass';
import '../../sass/Responsables.sass';
import useResponsables from '../../hooks/useResponsables';
import url from '../../keys/backend_keys';

import FormResponsable from './extras/FormResponsable';
// FormResponsable
const Responsables = () => {
	const MostrarFormNuevo = ({datos,set_datos}) => {
		return (
			<>				
				<div className="modalPaciente">
					<div className="contenedorForms">
						<FormResponsable   datos={datos} set_datos={set_datos} />
					</div>
					<div
						className="cerrarForm"
						onClick={() => {
							setForm(false);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
						</svg>
					</div>
				</div>
			</>
		);
	};
	const [form, setForm] = useState(false);
	const [datos, loading, set_datos] = useResponsables();
	const onForm = () => {
		setForm(!form);
	};
	const onDelete = (id) => {
		fetch(`${url}/api/auth/${id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'DELETE',
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				alert(data.msg);
			})
			.then(() => {
				set_datos(datos.filter((item) => item._id !== id));
			});
	};
	return (
		<div className="list">
			{console.log(datos)}
			<h2>
				Responsables&nbsp;&nbsp;&nbsp;&nbsp;
				<span onClick={onForm}>Nuevo</span>
			</h2>
			{/* Mostrar Form Nuevo */}
			{form && <MostrarFormNuevo datos={datos} set_datos={set_datos}/>}
			{loading === false ? (
				<div className="datos_responsables">
					{datos.map((item) => (
						<div className="dato_responsable" key={item._id}>
							<p>
								<strong>-DNI : </strong>
								{item.dni}
							</p>
							<p>
								<strong>-Nombre: </strong>
								{item.nombre}
							</p>
							<p>
								<strong>-Email: </strong>
								{item.email}
							</p>
							<p>
								&nbsp;&nbsp;
								<strong
									onClick={() => {
										onDelete(item._id);
									}}
									style={{
										cursor: 'pointer',
										color: 'crimson',
									}}
								>
									Eliminar
								</strong>
							</p>
						</div>
					))}
				</div>
			) : (
				<p>cargando...</p>
			)}
		</div>
	);
};

export default Responsables;
