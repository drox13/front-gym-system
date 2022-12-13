import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarDataCoach } from '../../components/SideBar/SideBarData'
import Button from '@mui/material/Button';
import withReactContent from "sweetalert2-react-content"
import Swal from 'sweetalert2';
import { useForm } from '../../helpers/useForm';
import './CreateExercise.css'
import { useEffect } from 'react';
import { exercisesApi } from '../../api/axios';
const CreateExercise = () => {
    const MySwal = withReactContent(Swal)
    const [type_exercise, settype_exercise] = useState('EM')
    const [formValues, handleInputChange] = useForm({
      name_excersice:'',
        description:'',
        time:'',
        reps:'',
        weight:''
      });
     
    const {name_excersice,description,time,reps,weight} = formValues
    const handleSubmit = async (event)=>{
      
        event.preventDefault() 
         await exercisesApi.post('/add',JSON.stringify({
          "name_excersice": name_excersice,
          "description": description,
           "time":time !== ''?time:0,
          "repetitions": reps !== ''?reps:0,
          "weight": weight !== ''?weight:0
      }))
        .then(response=>{
            MySwal.fire({
                title: <p>Ejercicio Creado</p>,
                icon:'success'
        })})
        .catch(error=>console.log('error'))
       
     }
    
    return(
        <>
            <SideBar sidebarData= {SideBarDataCoach}/>

        <h1 className=''>Crear Ejercicio</h1>
        <form onSubmit={handleSubmit} className = 'form-createuser'>
        <div>
        <input type="text" id="username" className='input-exercise'   name="name_excersice" placeholder="Name" value={name_excersice} onChange={handleInputChange} />
        <input type="text-area" id="description"   className='input-exercise'  name="description" placeholder="Description" value={description} onChange={handleInputChange} />
        <hr/>
        <label >Tipo de ejercicio:</label>
        <select className='input-exercise'  value = {type_exercise} onChange = {(choice)=>settype_exercise(choice.target.value) }>
          <optgroup>
            <option value="EM">Esfuerzo Maximo</option>
            <option value="RES">Resistencia</option>
            <option value="RM">Fuerza Maxima</option>
          </optgroup>
        </select>
        {(type_exercise === "EM" || type_exercise === "RES" ) && 
        <input type="text" id="time" className='input-exercise'   name="time" placeholder="Time" value={time} onChange={handleInputChange} />
        }
        {type_exercise === "RES" && 
        <>
        <input type="text" id="reps"  className='input-exercise'  name="reps" placeholder="Reps" value={reps} onChange={handleInputChange} />
        </>

        }
        {type_exercise === "RM" && 
        <input type="text" id="weight"  name="weight" placeholder="Weight" className='input-exercise'value={weight} onChange={handleInputChange} />
        }
      </div>
            <div id="button">
            <Button sx ={{width:'50%',transform: 'translate(50%, -30%)'}}variant="contained" type = "submit"  className='button-login'>Crear Ejercicio</Button>
            </div>
        </form>
        </>
    )
}

export default CreateExercise