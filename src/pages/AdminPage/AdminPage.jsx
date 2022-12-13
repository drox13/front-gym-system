import './AdminPage.css'
import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'

import { adminApi, usersApi } from "../../api/axios";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { SideBarData } from '../../components/SideBar/SideBarData';
import { useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

const AdminPage = () => {
  const [payment,setPayment] = useState(0.0)
  const [modal,setModal] = useState(false);
  const [searchValue,setSearchValue] = useState('')
  const [invoceId,setInvoceId] = useState('')
  const [recordId,setRecordId] = useState('')

  const openCloseModal = ()=>{
    setModal(!modal)
  }
  useEffect(()=>{
    getUsers( )
  },[modal])
  
  useEffect(()=>{

  },[searchValue])
  const openModal = (invoce,record) => {
    setInvoceId(invoce)
    setRecordId(record)
    openCloseModal()
    
  }
  const pay = async()=>{
    console.log('Pagando...')
    await adminApi.post('/fertilize/add',{'value':payment,'id_invoice':invoceId,'id_record':recordId})
      .then((response)=> console.log(response))
      .catch((error)=>console.log(error))
    openCloseModal()

  }
  const body =(<div className='modal-admin-pay'>
    <div align = "center">
      <h2>
        Pago 
      </h2>
      <input type='number' label = "Valor" className='texfield-modal' onChange={e=>setPayment(e.target.value)}/>
      <br/>
      <div align = "right">
      <Button color="primary" onClick={pay}>Pagar</Button>
      <Button onClick={openCloseModal}>Cancelar</Button>
      </div>

    </div>

  </div>)
  
  const [users, setUsers] = useState('')
  const getUsers = async () => {
    await adminApi.get('/fertilize/get').then(response => {setUsers(response.data); console.log(response,'respuesta')})
      .catch(error => console.log(error))

  }

  if (users === '') {
    getUsers()
    console.log(users)
  }
 
 
  return (

    <>

      <SideBar sidebarData = {SideBarData} />
      <Modal open = {modal} onClose= {openCloseModal} >
        {body}
      </Modal>
      <SearchBar callback={(searchValue)=>setSearchValue(searchValue)}/>
      <div className='body-admin-main-page'>

      <table className="styled-table">

      <thead>
        <tr>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Fecha fin de registro</th>
            <th>Fecha fin del plan</th>
            <th>Saldo Pendiente</th>
            <th>Pagar</th>

        </tr>
    </thead>
    <tbody>
                {users!== ''&&users.map((user,index) => (
                  
                  <tr
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className="active-row"
                  >
                    <td align="right" className='table-cell-Admin'>{user.document}</td>
                    <td align="right" className='table-cell-Admin'>{user.name}</td>

                    <td align='right' className='table-cell-Admin'>{user.end_date_register}</td>
                    <td align='right' className='table-cell-Admin'>{user.end_date_plan}</td>
                    <td align='right' className='table-cell-Admin'>${user.balance}</td> 
                    <td>
                    <Button variant="outlined" color="primary" onClick={()=>openModal(user.id_invoice,user.id_record)} >
                      Pagar
                    </Button>
                  </td>
                  </tr>
                ))}
              </tbody>
              </table>
      </div>

    </>
  )
}

export default AdminPage