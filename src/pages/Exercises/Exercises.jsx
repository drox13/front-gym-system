import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarDataCoach } from '../../components/SideBar/SideBarData'
import IconButton from '@mui/material/IconButton';
import { Button, Icon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './Exercises.css'
import Popupp from '../../components/Popup/Popup';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CreateExercise from '../CreateExercise/CreateExercise';
import { exercisesApi } from '../../api/axios';
const Exercises = () => {

    const ejercicios = [
        {
            nombre:'Peso Muerto',
            tiempo :`2`,
            reps: 5,
            peso:'80lb'
        },
        { nombre:'Peso ',
        reps: 5,
        peso:'80lb'},
        { nombre:'Peso Muerto',
        tiempo :`2`,
        peso:'80lb'},
        { nombre:'Peso Muerto',
        tiempo :`2`,
        reps: 5,
        peso:'80lb'}
    ]
    const [exercisesGYm,setExercises] = useState([])

    const [open, setOpen] = React.useState(false);
    useEffect(()=>{
      getExercises()
      
    },[])
  
  
    const getExercises = async () => {
      await exercisesApi.get('/').then((response) =>{
        setExercises(response.data)})
        .catch(error => console.log(error))
    }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>

    <SideBar sidebarData= {SideBarDataCoach}/>
    
   <div className='ejercio-agregar'>
    <h1 className='exercise-title'> Ejercicios</h1>
    {/* <Button className='add-exercise' onClick={handleOpen} variant="contained" color='success' startIcon={<AddIcon />}>
            Agregar Ejercicio
    </Button> */}

   </div>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box sx={{ position:'absolute',top:'50%',left: '50%',transform: 'translate(-50%, -50%)',bgcolor: 'background.paper',
  border: '2px solid #000',  boxShadow: 24,width: '40%' }}>
    <CreateExercise/>
   
  </Box>
</Modal>
    
        <div className="container">
            <div className="row">
                <div className="col">
                 
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Nombre</th>
                                <th>Tiempo</th>
                                <th>Reps</th>
                                <th>Peso</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            {exercisesGYm.map( (plan,index)=>(
                                
                                <tr key={index}>
                                    <td>{plan.name_excersice}</td>
                                    <td> {!plan.time ? 'no aplica' : plan.time} </td>
                                    <td> {!plan.repetitions ? 'no aplica': plan.repetitions} </td>
                                    <td> {!plan.weight ? 'no aplica':plan.weight} </td>
                                    
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </>
  )
}

export default Exercises