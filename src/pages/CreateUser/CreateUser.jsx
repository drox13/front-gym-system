import React, { useMemo } from "react"
import {useForm} from "react-hook-form"
import './CreateUser.css'
//import "../cssConfigurations.css"
//import "./auCss.css"
import { useDispatch, useSelector } from "react-redux"
import { starRegister } from "../../store/auth/thunks"
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar"
import { SideBarData } from "../../components/SideBar/SideBarData"


const CreateUser = ()=>{
  
  const{register, handleSubmit, formState: { errors }} = useForm()
  const dispatch = useDispatch();//Permite hacer dispatch de acciones en cualquier lugar
  
  const custonSubmit = async(data) =>{
    console.log(data);
    dispatch(starRegister(data))
  }

  return(
    <>
    <SideBar sidebarData = {SideBarData}/>
    <div className="create-user-body">

    <h1 className="h1-register">Registro Usuario</h1>
    <div className="form-register">

    <form className="form-createuser" onSubmit={handleSubmit(custonSubmit)}>
      
      <div>
        <label className = "label-createUser">Tipo de Documento</label>
        <select {...register("type_document")}  >
          <optgroup >
            <option value="CC" >Cedula</option>
            <option value="TI">Tarjeta de identidad</option>
            </optgroup>
        </select>
      </div>

      <div>
        <label className = "label-createUser">Documento  {errors.document?.type === "required" && <small className="is-required"></small>}</label>
        <input type="number" {...register("document", {required: true})}/>
       
      </div>

      <div>
        <label className = "label-createUser">Nombres  {errors.name?.type === "required" && <small className="is-required"></small>} </label>
          <input {...register("name", {required: true})} />
        
      </div>
      
      <div>
          <label className = "label-createUser">Apellidos {errors.last_name?.type === "required" && <small className="is-required"></small>}</label>
          <input {...register("last_name", {required: true})} />
          
      </div>

      <div>
        <label className = "label-createUser">Telefono {errors.cell_phone?.type === "required" && <small className="is-required"></small>}</label>
        <input type="number" {...register("cell_phone", {required: true})}/>
        
      </div>

      <div>
        <label className = "label-createUser">Correo: {errors.email?.type === "required" && <small className="is-required"></small>}</label>
        <input type="email" className="form_input" {...register("email", {required: true}) }/>
        
      </div>

      <div>
        <label className = "label-createUser">Fecha de Nacimiento</label>
        <input type="date" className="form_input" {...register("date_of_birth", {required: "Date is required" , valueAsDate: true,})}/>
        {errors.date_of_birth && <small className="is-required">{errors.date_of_birth.message}</small>}
      </div>

      <div>
        <label className = "label-createUser">Genero:</label>
        <select {...register("gender")}  >
          <optgroup>
            <option value="F" >Femenino</option>
            <option value="M">Masculino</option>
          </optgroup>
        </select>
      </div>
      
      <div>
        <label  className = "label-createUser">Rol:</label>
        <select {...register("type_user")}  >
          <optgroup>
            <option value="Ad">Administrador</option>
            <option value="En">Entrenador</option>
            <option value="Cl">Cliente</option>
          </optgroup>
        </select>
      </div>

      <div></div>
    <div id="button">
        <button className="button-submit" type="submit">Registrar</button>
    </div>
    </form>
    </div>
    </div>
    </>
  )
}
export default CreateUser