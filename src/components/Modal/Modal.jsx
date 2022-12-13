import { useSelect } from '@mui/base';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { testHistoryApi } from '../../api/axios';
import { useForm } from '../../helpers/useForm';

const ModalForm = ({test,type}) => {
    const [show, setShow] = useState(false);
    const {document} = useSelector(state => state.auth);
    console.log(test,'id_test')
    const [formValues, handleInputChange] = useForm({
        rm_result:"2",
        test_date: "2020-01-23",
        time_result: "00:00:10",
        repetitions_result: "2"
      });
    const {rm_result,test_date,time_result,repetitions_result}  = formValues

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleTestData = async(e)=>{
        e.preventDefault()
        await testHistoryApi.post('/add',{
            "rm_result":rm_result,
            'test_date':test_date,
            'id_test':test,
            'document':document,
            'time_result':time_result,
            'repetitions_result':repetitions_result


        }).then(response=>{
            console.log(response)
        }).catch(error=>console.log(error))

        handleClose()
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Agregar Resultado
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar resultados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="w-full max-w-sm">
                        <div >
                            <label >RM-Resultado</label>
                            <input style={{width:450}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name = 'rm_result'value={rm_result} placeholder='RM' id="name" type="text"onChange={handleInputChange} />
                            <label >Tiempo</label>

                            <input style={{width:'100%'}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"name = 'time_result' value = {time_result} placeholder='Tiempo' id="name" type="text"onChange={handleInputChange} />
                            <label >Repeticiones</label>
                            <input style={{width:'100%'}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"name = 'repetitions_result'value = {repetitions_result} placeholder='Repeticiones' id="name" type="text" onChange={handleInputChange}/>
                            <label >Fecha</label>

                            <input type="date" className="form_input" name='date' />
                        </div>
                        
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick = {handleTestData}>Enviar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalForm;
