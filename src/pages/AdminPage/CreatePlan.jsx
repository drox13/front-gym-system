import { Button } from "@mui/material"
import React from "react"
import {useForm} from "react-hook-form"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

import axios, { personsApi, plansApi } from '../../api/axios'
import SideBar from "../../components/SideBar/SideBar"
import { SideBarData } from "../../components/SideBar/SideBarData"


const CreatePlan = ()=>{
    const{register, handleSubmit, formState: { errors }} = useForm()
    const MySwal = withReactContent(Swal)

    const custonSubmit = async(data) =>{
        console.log(data);
        await plansApi.post('/add',JSON.stringify(data))
        .then(response=>{
            MySwal.fire({
                title: <p>Plan Creado</p>,
                icon:'success'
        })})
        .catch(error=>console.log('error'))
   
        }
    
    return(
        <>
        <SideBar sidebarData = {SideBarData}/>
        <h1>Crear Plan</h1>
        <form className="form-createuser" onSubmit={handleSubmit(custonSubmit)}>
            <div>
                <label>Nombre Plan  {errors.name_plan?.type === "required" && <small className="is-required"></small>}</label>
                <input {...register("name_plan", {required: true})}/> 
            </div>

            <div>
                <label>Precio {errors.price?.type === "required" && <small className="is-required"></small>}</label>
                <input type="number" {...register("price", {required: true})}/>
            </div>

            <div>
                <label>Duracion (meses)  {errors.duration_months?.type === "required" && <small className="is-required"></small>}</label>
                <input type="number" {...register("duration_months", {required: true})}/>
            </div>

            <div id="button">
            <Button variant="contained" type = "submit">Crear Plan</Button>

            </div>
        </form>
        </>
    )
}

export default CreatePlan