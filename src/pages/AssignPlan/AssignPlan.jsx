import { Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React,{useState} from 'react'
import { adminApi, plansApi, recordsApi } from '../../api/axios'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarData } from '../../components/SideBar/SideBarData'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system'
import { useEffect } from 'react'
import './AssignPlan.css'
const AssignPlan = () => {
    const [plan, setPlan] = React.useState('');
    const [modal,setModal] = useState(false);

    useEffect(()=>{
      getPlans()
      
    },[])
    useEffect(()=>{
      getUsers()
      
    },[modal])
    
    const handleChange = (event) => {
      
      setPlan(event.target.value)
    };
    const [users, setUsers] = useState([])
    const [idRecord,setIdRecord] = useState('')
    const [payment,setPayment] = useState(0.0)
    const [userPay,setUserPay] = useState('')
    const [idUserPay,setIdUserPay] = useState('')
    const [plansGYM,setPlansGYM] = useState([])
    const openCloseModal = ()=>{
      setModal(!modal)
    }
    const openModal = (id = 'id', name = 'nombre',id_record='2') => {
      openCloseModal()
      setUserPay(name)
      setIdUserPay(id)
      setIdRecord(id_record)
    }
    const planAssigment = async ()=>{
      console.log(plan,'idecord',idRecord)
      await recordsApi.post('/add',{id_plan:plan,id_record:idRecord}).then((response)=>console.log(response))
      .catch((error)=>console.log(error))
      getUsers()
      openCloseModal()
    }
    
    const getPlans = async () => {
      await plansApi.get('/').then((response) =>{
      setPlansGYM(response.data)})
        .catch(error => console.log(error))
    }
    const getUsers = async()=>{
      await adminApi.get('/').then((response)=>{
        setUsers(response.data)
      }).catch(error=>console.log(error))

      console.log(users)
    }

     const body =(
        <div className='modal-admin-pay'>

       <div align = "center">
       <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Planes Actuales</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={plan}
          label="Age"
          onChange={handleChange}
        >     
        {plansGYM.map((plan,index)=>
          ((<MenuItem value={plan.id_plan} key ={index}>{plan.name_plan}</MenuItem>))
        )
        }
        </Select>
      </FormControl>
    </Box>
       
    <Button onClick={planAssigment}>Asignar Plan</Button>
       </div>
        </div>
    
    )
    return (
  
      <>
  
        <SideBar sidebarData = {SideBarData} />
        <Modal open = {modal} onClose= {openCloseModal} >
          {body}
        </Modal>
  
  
        <div className='table-admin'>
        <table class="styled-table">
    <thead>
        <tr>
            <th>Documento</th>

            <th>Asignar PlAN</th>
        </tr>
    </thead>
    <tbody>
                {users!== ''&&users.map((user) => (
                  
                  <tr
                    key={user.document}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    class="active-row"
                  >
                    <td align="right" className='table-cell-Admin'>{user.document}</td>
                    
                    <td>
                      <Button variant="outlined" color="primary" onClick={()=>openModal(user.id_user,user.user_name,user.id_record)} >
                        Asignar Plan
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

export default AssignPlan