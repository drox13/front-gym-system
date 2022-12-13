import { Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { body_data_api } from '../../api/axios';
import SideBar from '../../components/SideBar/SideBar';
import { SideBarDataClient } from '../../components/SideBar/SideBarData';
import { useForm } from '../../helpers/useForm';
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const HealthyData = () => {
    const {document} = useSelector(state => state.auth);
    const MySwal = withReactContent(Swal)

    const [formValues, handleInputChange] = useForm({
        porc_muscle_mass:'',
        porc_masa_grasa:'',
        porc_water:'',
        date:'',
        document,
        });
    const {porc_muscle_mass, porc_masa_grasa, porc_water,date} = formValues;
    const handleSubmit = async ()=>{
        console.log({
            "date_data": date,
            "porc_muscle_mass": porc_muscle_mass,
            "porc_masa_grasa":porc_masa_grasa,
            "porc_water": porc_water,
            "document": document})
    try{
        await body_data_api.post('/add',{
    "date_data": date,
    "porc_muscle_mass": porc_muscle_mass,
    "porc_masa_grasa":porc_masa_grasa,
    "porc_water": porc_water,
    "document": document
        }).then(response=>{
            MySwal.fire({
                title: <p>Plan Creado</p>,
                icon:'success'
        })}).catch(error=>console.log(error,'error'))

    }catch{
        console.log('error')
    }

    console.log({
    "date_data": date,
    "porc_muscle_mass": porc_muscle_mass,
    "porc_masa_grasa":porc_masa_grasa,
    "porc_water": porc_water,
    "document": document})
       

    }
  return (
    <>
    <SideBar sidebarData = {SideBarDataClient}/>
    <h1>Datos corporales</h1>
    <form className = "form-createuser "onSubmit={handleSubmit} >
    <label>Porcentage de masa muscular</label>
    <input type="text" id="username" className='input-exercise'   name="porc_muscle_mass" placeholder="Masa" value={porc_muscle_mass} onChange={handleInputChange} />
    <label>Porcentage de grasa</label>
    <input type="text" id="username" className='input-exercise'   name="porc_masa_grasa" placeholder="Grasa" value={porc_masa_grasa} onChange={handleInputChange} />
    <label>Porcentage de agua</label>
    <input type="text" id="username" className='input-exercise'   name="porc_water" placeholder="Agua" value={porc_water} onChange={handleInputChange} />
    <label>Fecha</label>
    <input type="date" className="form_input" name='date' value={date} onChange={handleInputChange} />
    <Button onClick={handleSubmit}>Enviar</Button>
    </form>
    </>
  )
}

export default HealthyData