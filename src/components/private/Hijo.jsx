import React ,{useState}from 'react';
import FormFoto from './extras/FormFoto';
const Hijo = (props) => {
	const [form, setForm] = useState(false);
	return (
		<div>
			{form&&<FormFoto id={props.match.params.id} setForm={setForm}/>}
			<h2 style={{ marginTop: '19px' }}>Hijo</h2>
			<br />
			<p>
				Agrega fotos de tu niño y observa su crecimiento
				progresivo ♥
			</p>
			<br />
			<p>
				<strong style={{ cursor: 'pointer', color: '#50B4A1' }} onClick={()=>{setForm(true)}} >
					Nueva foto
				</strong>
			</p>
		</div>
	);
};

export default Hijo;
