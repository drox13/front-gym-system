import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import SideBar from '../../components/SideBar/SideBar';
import { SideBarDataClient } from '../../components/SideBar/SideBarData';
import { testApi } from '../../api/axios';
import ModalSetup from '../../components/Modal/Modal';
import Modal from '../../components/Modal/Modal';
import ModalForm from '../../components/Modal/Modal';

const ShowTests = () => {
    const [tests, settests] = useState([])

    
    useEffect(()=>{
        getTestList()
      },[])


  const getTestList = async()=>{
    await testApi.get('/').then(response => {settests(response.data); console.log(response,'respuesta')})
      .catch(error => console.log(error))
  }
  console.log(tests)
  return (
    <>
    <SideBar sidebarData = {SideBarDataClient}/>
    <h1>Test Disponibles</h1>
      
         <table className="styled-table">

      <thead>
        <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Agregar resultado</th>

        </tr>
    </thead>
    <tbody>
        {tests!== []&&tests.map((user,index) => (
    <tr              
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className="active-row"
                  >
                        <>
                    <td align="right" className='table-cell-Admin'>{user.test_name}</td>
                    <td align="right" className='table-cell-Admin'>{user.type}</td>       
                        </>
                    
      
                    <td>
                      
                    <ModalForm test = {user.id_test} type = {user.type} />
                  </td>
                  </tr>
                    )  )}
                  </tbody>
                  </table>
 
    </>
  )
}

export default ShowTests