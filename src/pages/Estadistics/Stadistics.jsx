import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { body_data_api, testApi, testHistoryApi } from '../../api/axios'
import LineChart from '../../components/charts/LineChart/LineChart'
import PieChart from '../../components/charts/PieChart/PieChart'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarDataClient } from '../../components/SideBar/SideBarData'

const Stadistics = () => {
  const {document} =  useSelector(state=>state.auth)
  const [physicalData, setphysicalData] = useState('')

  const [tests,seTests] = useState([1,2,3,4,5,5])
  const [tests_history,seTestsHistory] = useState([1,2,3,4,5,5])
  const [ultimatePhysicalData,setUltimatePysicalData] = useState([1,2,3])
  const getTests = async () => {
    
      await testApi.get('').then((response) =>{
        seTests(response.data)})
        .catch(error => console.log(error))

   
  }
  const getTestsHistory = async () => {
    
      await testHistoryApi.post('/by_document',{'document':document}).then((response) =>{
        seTestsHistory(response.data[0])})
        .catch(error => console.log(error))
      
  }
  
    const getPhysicalData = async ()=>{
      await body_data_api.post('/by_document/',{'document':document}).then((response)=>{
        setphysicalData(response.data)
      }).catch(error=>console.log(error,'error'))
    }
   
    useEffect(() => {
      getTestsHistory()
      getPhysicalData()
      getTests()      
    },[])

    const masa = physicalData && physicalData[0].map((data)=>data.porc_muscle_mass)
    const grasa = physicalData && physicalData[0].map((data)=>data.porc_masa_grasa)
    const agua = physicalData && physicalData[0].map((data)=>data.porc_water)
    


     const data = {
       labels: physicalData &&  physicalData[0].map((data)=>data.date_data),
      datasets: [
        {
          label: 'Masa Corporal',
          data:  masa,
          borderColor:"black",
          backgroundColor: "#ecf0f1",
          yAxisID: 'y',
        },
        {
          label: 'Grasa',
          data: grasa,
          borderColor: "black",
          backgroundColor: "#50AF95",
          yAxisID: 'y1',
        },
        {
          label: 'Agua',
          data: agua,
          borderColor: "black",
          backgroundColor: "#f3ba2f",
          yAxisID: 'y1',
        }]
       }
       const pieData = {
        labels:physicalData && ['Masa muscular','Grasa','Agua'],
        datasets:[{
            label:"Datos Fisicos Actuales",
            data:[ parseInt(masa[masa.length-1]), parseInt(grasa[grasa.length-1]), parseInt(agua[agua.length-1])],
            backgroundColor:["rgba(75,192,192,1)","#ecf0f1","#50AF95","#f3ba2f","#2a71d0"]
        }],
        borderColor:"black",
        borderWidth:2,
      }
    
       console.log(tests_history)
  return (
    <>
      <SideBar sidebarData = {SideBarDataClient}/>

     <div style = {{width:700,marginLeft:50, float:'left'}}>
      <h1>Historial de datos fisicos</h1>
      <LineChart chartData={data}/>
    </div>
    <h1>
    </h1>
   

     <div style = {{width:400, display:'inline-block',marginLeft:'15%'}}>
      <h1>Datos fisicos actuales</h1>
      <PieChart chartData={pieData}/>
    </div>
    <hr />
    
    {
      <div style = {{width:800,marginLeft:50,display:'block'}}>
      <h1>Historial de tests</h1>
      
            
 <table className="styled-table">

<thead>
  <tr>
      <th>Nombre</th>
      <th>Tipo</th>
      <th>Tiempo</th>
      <th>Repeticiones</th>
      <th>Fecha</th>
      <th>RM result</th>
  </tr>
</thead>
<tbody> 
  {/* {(tests_history  && tests_history[0].lenght>0) ? <div>{tests_history[0].map(test=>(<h1>{test}</h1>))}</div>:<p>asdfasdf</p>} */}
  {tests_history.map((user,index) => (
<tr              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="active-row"
            >
                  <>
              <td align="right" className='table-cell-Admin'>{tests.map(test=>((test.id_test === user.id_test)?test.test_name:''))}</td>
              <td align="right" className='table-cell-Admin'>{tests.map(test=>((test.id_test === user.id_test)?test.type:''))}</td>
              <td align="right" className='table-cell-Admin'>{user.time_result}</td>       
              <td align="right" className='table-cell-Admin'>{user.repetitions_result}</td>
              <td align="right" className='table-cell-Admin'>{user.test_date}</td>       
              <td align="right" className='table-cell-Admin'>{user.rm_result}</td>       
                  </>
              <td>       
            </td>
            </tr>
              )  )}
            </tbody>
            </table> 

    </div> }
    <hr />

    </>
    
  )
}

export default Stadistics