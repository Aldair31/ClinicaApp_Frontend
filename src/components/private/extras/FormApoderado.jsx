import { useState } from "react";
import axios from 'axios';
import url from '../../../keys/backend_keys';

const FormApoderado = ()=> {

  const [state, setEstado] = useState({file:null})
  const subirArchivo= (e) => {
    // console.log(e.target.files, "$$$$");console.log(e.target.files, "$$$$");
    let file= e.target.files[0]
    setEstado({file:file})
    console.log(file);
  }

  const consumirArchivo = (e) =>{
    let file = state.file;
    let formdata =new FormData()
    formdata.append('avatar', file)
    // formdata.append('name', 'avatar')
    console.log('Subido')
    axios({
      url:`${url}/api/auth/files`,
      method: "POST",
      data: formdata
    }).then((res)=>{
      console.log(res);
    })
  }
  return (
    <div className="contenedor_perfil">
      <form method="post" encType="multipart/form-data">
        <div>
          {/* <label>Seleccione archivo</label> */}
          <i className="far fa-user"></i>
          <br/>
          <input type= "file" name="avatar" onChange={(e)=>subirArchivo(e)}></input>
        </div>
        <br/>
        <button type="button" onClick= {(e)=>consumirArchivo(e)}>Subir</button>
      </form>
    </div>
  );
}

export default FormApoderado;
