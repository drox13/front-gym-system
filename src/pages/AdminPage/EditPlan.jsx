import {useState, useEffect} from "react"
import {useForm} from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";
import { plansApi } from "../../api/axios";
import SideBar from "../../components/SideBar/SideBar";
import { SideBarData } from "../../components/SideBar/SideBarData";




const EditPlan = ()=>{
    const[name_plan, setNamePlan] = useState("")
    const[price, setPrice] = useState("")
    const[duration_months, setDuration] = useState("")
    const{register, handleSubmit, formState: { errors }} = useForm()
    const navigate = useNavigate()
    const {id_plan} = useParams()

    const update = async(data) =>{
       
          await plansApi.put('/' + id_plan, {
            name_plan: data.name_plan,
            price: data.price,
            duration_months: data.duration_months
            }).then(response => console.log(response))
                .catch(error=> console.log(error))
        
        }

        useEffect( ()=>{
            getPlansById()
        }, [])

        const getPlansById = async ()=>{
            const res = await plansApi.get('/' + id_plan)
            setNamePlan(res.data.name_plan)
            setPrice(res.data.price)
            setDuration(res.data.duration_months)
        }
    return(
        <>
                <SideBar  sidebarData = {SideBarData}/>

        <h1>Editar Plan</h1>
        <form onSubmit={handleSubmit(update)} className= "form-createuser">
            <div>
                <label>Nombre Plan  {errors.name_plan?.type === "required" && <small className="is-required"></small>}</label>
                <input  {...register("name_plan", {required: true})}/> 
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
                <button type="submit">Editar Plan</button>
            </div>
        </form>
        </>
    )
}

export default EditPlan