import { FiChevronDown, FiChevronLeft } from 'react-icons/fi';
import './Form.css'
import { useState } from 'react';
import {BsSendFill} from 'react-icons/bs';
const Form = ({toggle}) => {
    const [select,setSelect] = useState(false)
    const [selectvalue, setSelectValue] = useState("Select Priority")
    const handleShow =()=>{
        setSelect(!select)
    }
    const handleValue = (value) =>{
        setSelectValue(value)
    }
    return ( 
        <div className="modal-background">
            <div className="modal">
                <h2 className='add-todo'>Add A Do</h2>
                <div className="add-form">
                    <form>
                        <input type='text' placeholder='Bake a cake for the gathering'></input>
                        <div className="piority">
                            <p className='select' onClick={handleShow}>{selectvalue}</p>
                            <FiChevronDown/>
                            {select && (
                                <div className="dropdown">
                                    <p className='high' onClick={()=>{handleShow(); handleValue("Priority task(High)")}}>Priority task(High)</p>
                                    <p className='medium' onClick={()=>{handleShow(); handleValue("Priority task(Medium)")}}>Priority task(Medium)</p>
                                    <p className='low' onClick={()=>{handleShow(); handleValue("Priority task(Low)")}}>Priority task(Low)</p>
                                </div>
                            )}
                        </div>
                        <div className="submit-todo">
                            <div className="send"><BsSendFill/></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Form;