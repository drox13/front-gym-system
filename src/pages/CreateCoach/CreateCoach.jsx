import React from 'react'
import { useState } from 'react'
import axios, { personsApi } from '../../api/axios'
import {useForm} from '../../helpers/useForm'
import './CreateCoach.css'
const CreateCoach = () => {
  const [plan, setplan] = useState('1month')
  const [role, setRole] = useState('User')

  const [formValues, handleInputChange] = useForm({
    name:'Santiago',
    email:"santiago.moreno01@uptc.edu.co",
    password:'123456',
    phone:'12345',
    document:'12341234',
    plan:'1month',
    role:'user'
});

const{name,email,password,phone,document} = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    formValues.plan = plan
    formValues.role = role
    console.log(formValues)
    try{
    const response = await personsApi.post('register',JSON.stringify({formValues}),
            {
              headers:{'Content-Type':'application/json'},
              withCredentials:true
            }
          );
    console.log(response)
        }catch(err){

        }
  }

   
  return (
    <>
    <head>
        <title>Sign Up Form</title>
        <link rel="stylesheet" href="css/normalize.css"/>
        <link href='https://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css'/>
    </head>
    <div>

      <form  onSubmit={handleSubmit}>
      
        <h1>Registro</h1>
        
        <fieldset>
          <legend><span class="number">1</span>Informacion Basica</legend>
          <label for="name">Name:</label>
          <input type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete = "off"
                    value = {name}
                    onChange = {handleInputChange}/>
          
          <label for="mail">Email:</label>
          <input  type="text"
                  placeholder="Email"
                  name="email"
                  autoComplete = "off" value={email}  onChange={handleInputChange} />

          <label for="document">Documento:</label>
          <input type="text"
                  placeholder="document"
                  name="document"value={document}  onChange={handleInputChange}/>
          
          <label for="password">Password:</label>
          <input type="password" placeholder="password"  name="password" value={password}  onChange={handleInputChange}/>
          
          <label for="phone">Telefono:</label>
          <input type="text" placeholder="phone number"  name="phone" value={phone}  autoComplete = "off"  onChange={handleInputChange}/>
        </fieldset>
        <button type="submit" value="Submit">Sign Up</button>
      </form>
      </div>
    </>

  )
}

export default CreateCoach