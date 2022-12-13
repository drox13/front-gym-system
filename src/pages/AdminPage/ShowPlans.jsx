import React from "react"
import axios, { plansApi } from '../../api/axios'
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import SideBar from "../../components/SideBar/SideBar"
import { SideBarData } from '../../components/SideBar/SideBarData';
import TextField from "@mui/material/TextField";
import { height } from "@mui/system"




const ShowPlans = ()=>{




    const [searchInput, setSearchInput] = useState("");

    const[plans, setPlan] = useState([])
    useEffect( ()=>{
        getPlans()
    }, [])
    //procedimiento para mostrar planes
    const getPlans = async()=>{
        const res = await plansApi.get('/')
        setPlan(res.data)
    }
    //procedimiento para eliminar un plan
    const deletePlan = async(id_plan)=>{
        await plansApi.delete(`/${id_plan}`)
        
        getPlans()
    }
    const filteredData = plans.filter((el) => {
        //if no input the return the original
        console.log(searchInput)

        if (searchInput.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name_plan.toLowerCase().includes(searchInput)
        }
    })
    const handleChange = (e) => {
        e.preventDefault();
        var lowerCase = e.target.value.toLowerCase();
        setSearchInput(lowerCase);
      };
      
      if (searchInput.length > 0) {
          plans.filter((plan) => {
          return plan.name_plan.match(searchInput);
      });
      }

    return(
        <>
        
        
        <SideBar  sidebarData = {SideBarData}/>
        <h1> Planes</h1>
        <TextField
          id="outlined-basic"
          onChange={handleChange}
          variant="outlined"
          fullWidth
          label="search"
          className="search"
          style={{
            width: "50%",
            height:"20px",
            marginLeft:"10%",
            marginTop:"15px"
        }}
        />
    
        <div className="container">
            <div className="row">
                <div className="col">
                 
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Duracion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map( (plan)=>(
                                <tr key={plan.id_plan}>
                                    <td> {plan.name_plan} </td>
                                    <td> {plan.price} </td>
                                    <td> {plan.duration_months} </td>
                                    <td>
                                        <Link to={`/adminPage/editPlan/${plan.id_plan}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deletePlan(plan.id_plan)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                    </td>
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

export default ShowPlans