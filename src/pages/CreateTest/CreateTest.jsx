import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarDataCoach } from '../../components/SideBar/SideBarData'
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content"
import { useForm } from '../../helpers/useForm';
import Button from '@mui/material/Button';
import { Description } from '@mui/icons-material';
import { useEffect } from 'react';
import './CreateTest.css'
import { exercisesApi, testApi } from '../../api/axios';
const CreateTest = () => {
  const exercisesConst = [
    {
      name: 'Sentadilla',
      description: 'Sentadilla estricta con barra',
      Tipo: 'RM',
      Peso: 70,
    },
    {
      name: 'Peso Muerto',
      description: 'Sentadilla estricta con barra',
      Tiempo: '2 minutos',
      Repeticiones: 30,
      Tipo: 'RES',

    },
    {
      name: 'Muscles ups',
      description: 'Sentadilla estricta con barra',
      Tiempo: '2 minutos',
      Tipo: 'EM',
    },

  ]





  const MySwal = withReactContent(Swal)
  const [formValues, handleInputChange] = useForm({
    nameTest: '',
    exercises: []
  });
  const [selectedExercise, setSelectedExercise] = useState({
    name:'',
    description:'',
    time:'',
    repeticiones:'',
    peso:''
  })
  const [type_exercise, settype_exercise] = useState('EM')

  const [exerciseList, setexerciseList] = useState([])
  const [exercisesGYm,setExercises] = useState([])

  const {nameTest}= formValues
  useEffect(()=>{
    getExercises()
    
  },[])


  const getExercises = async () => {
    try{
      await exercisesApi.get('/').then((response) =>{
        setExercises(response.data)})
        .catch(error => console.log(error))

    }catch{
      MySwal.fire({
                   title: <p>Ejercicios</p>,
                  icon:'error'
    })
  }
  }
  const { name, exercises } = formValues

  const handleSubmit = async(event) => {
    event.preventDefault()
    console.log(exerciseList)
    let tests_id = []
    exerciseList.map(execise =>{
      tests_id.push(parseInt(execise.id))
    })
 
    await testApi.post('/add_with_excercises',{
      "test_name": nameTest,
      "type": type_exercise,
      "list_exercices":tests_id
  })
    .then(response=>{
        console.log(response)
        MySwal.fire({
            title: <p>Plan Creado</p>,
            icon:'success'
    })})
    .catch(error=>console.log(error))


    MySwal.fire({
      title: <p>Ejercicio Creado</p>,
      icon: 'success'
    })
  }
  const addExercise = (event) => {
    event.preventDefault()
     setexerciseList([...exerciseList, JSON.parse(selectedExercise)])
    //console.log(exerciseList)
    console.log(exerciseList)
  }


  return (
    <>
      <SideBar sidebarData={SideBarDataCoach} />
      <h1>Crear Test</h1>
      <form onSubmit={handleSubmit} className='form-createuser'>
        <div>
          <input type="text" id="nameTest" className='input-exercise' name="nameTest" placeholder="Name" value={nameTest} onChange={handleInputChange} />
          <label >Tipo de ejercicio:</label>
        <select className='input-exercise'  value = {type_exercise} onChange = {(choice)=>settype_exercise(choice.target.value) }>
          <optgroup>
            <option value="EM">Esfuerzo Maximo</option>
            <option value="RES">Resistencia</option>
            <option value="RM">Fuerza Maxima</option>
          </optgroup>
        </select>
          <hr />
          <select className='input-exercise' value={selectedExercise} onChange={(choice) => setSelectedExercise((choice.target.value))}>
            <optgroup>
              {exercisesGYm.map((exercise, index) => (
                <option key={index} value={JSON.stringify({'id':exercise.id_exercise,'name':exercise.name_excersice,'description':exercise.description,'time':exercise.time,'peso':exercise.weight,'repeticiones':exercise.repetitions})}>{exercise.name_excersice}</option>

              ))}
            </optgroup>
          </select>
          <hr />
          <div className='exercise-list'>
          <table class="styled-table createTest">
          <thead>
        <tr>
            <th>Nombre</th>
            <th>Tiempo</th>
            <th>Repeticiones</th>
            <th>Peso</th>
        </tr>
        </thead>


            <tbody>
            {exerciseList.map((exercise,index) => (
              <tr
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              class="active-row"
            >
              <td align="right" className='table-cell-Admin'>{exercise.name}</td>
              <td align="right" className='table-cell-Admin'>{exercise.time}</td>
              <td align="right" className='table-cell-Admin'>{exercise.repeticiones}</td>
              <td align="right" className='table-cell-Admin'>{exercise.peso}</td>

                   
              </tr>
            ))}

            </tbody>
            </table>

          </div>
        </div>
        <div id="button">
          <Button variant="contained" className='button-login' onClick={addExercise}>Agregar Ejercicio</Button>

          <Button variant="contained" type="submit" className='button-login'>Crear Test</Button>
        </div>
      </form>
    </>
  )
}

export default CreateTest