import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarDataClient } from '../../components/SideBar/SideBarData'
import  "./UserBillingHistory.css"
const UserBillingHistory = () => {
    const history = [
        {fecha:'01-01-2022',
         cantidad:'100.000',
         descripcion:'Gym mes'},
         {fecha:'01-01-2022',
         cantidad:'100.000',
         descripcion:'Gym mes'},
         {fecha:'01-01-2022',
         cantidad:'100.000',
         descripcion:'Gym mes'},
         {fecha:'01-01-2022',
         cantidad:'100.000',
         descripcion:'Gym mes'},
         {fecha:'01-01-2022',
         cantidad:'100.000',
         descripcion:'Gym mes'},
         {fecha:'01-01-2022',
         cantidad:'100.000',
         descripcion:'Gym mes'},

    ]
  return (
    <>
    <SideBar sidebarData = {SideBarDataClient}/>
    <div className='table-admin'>

        <TableContainer component={Paper}>

          <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table-style-admin'>
            <TableHead>
              <TableRow>
                <TableCell className='table-cell-user-header'>Fecha</TableCell>
                <TableCell className='table-cell-user-header' align="center">Cantidad</TableCell>
                {/* <TableCell align="right">Plan</TableCell>
            <TableCell align="right">Fecha de facturacion</TableCell> */}
                <TableCell className='table-cell-user-header' align="center">Descripcion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.map((user) => (
                
                <TableRow
                 
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right" className='table-cell-Admin'>{user.fecha}</TableCell>

                  <TableCell align="right" className='table-cell-Admin'>{user.cantidad}</TableCell>
                  <TableCell align="right" className='table-cell-Admin'>{user.descripcion}</TableCell>

                  <td>
                  
                  </td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default UserBillingHistory