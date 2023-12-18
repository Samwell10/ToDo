import { FiChevronDown, FiChevronLeft } from 'react-icons/fi';
import './Form.css'
import { useState } from 'react';

import {BsSendFill} from 'react-icons/bs';
import {FaTimes} from 'react-icons/fa'
import { connect } from 'react-redux';
import loader from '../../Assets/loader.json'
import { fetchtodo, posttodo } from '../../Redux/Todo/TodoAction';
import LottieAnimation from '../../lotties';
const Form = ({toggle, posttodo, fetchtodo, loading, show, color}) => {
    const [select,setSelect] = useState(false)
    const [todo, setTodo] = useState(null)
    const [priority, setpriority] = useState(null)
    const [selectvalue, setSelectValue] = useState("Select Priority")
    const [postState, setpostState] = useState({})

    const handletodo=(e)=>{
        const value = e.target.value
        setTodo(value)
        setpostState({...postState, todo})
    }
    const handlePriority = (value) =>{
        setpriority(value)
        setpostState({...postState, priority: value})
    }
    const handleShow =()=>{
        setSelect(!select)
    }
    const handleValue = (value) =>{
        setSelectValue(value)
    }
    const handleSubmit = () =>{
        posttodo(postState, ()=>{
            fetchtodo()
            show(false)
        })
    }
    return ( 
        <div className="modal-background">
            <div className="modal">
                <h2 className='add-todo'>Add A Do</h2>
                <div className="add-form">
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Bake a cake for the gathering' onChange={handletodo} onBlur={handletodo}></input>
                        <div className="piority">
                            <p className='select' onClick={handleShow}>{selectvalue}</p>
                            <FiChevronDown/>
                            {select && (
                                <div className="dropdown">
                                    <p className='high' onClick={()=>{ handleShow(); handleValue("Priority task(High)"); handlePriority(1)}}>Priority task(High)</p>
                                    <p className='medium' onClick={()=>{handleShow(); handleValue("Priority task(Medium)"); handlePriority(2)}}>Priority task(Medium)</p>
                                    <p className='low' onClick={()=>{ handleShow(); handleValue("Priority task(Low)"); handlePriority(3)}}>Priority task(Low)</p>
                                </div>
                            )}
                        </div>
                        <div className="submit-todo">
                            <div className="cancle send" onClick={toggle}>
                                <FaTimes/>
                            </div>
                            <div className="send" onClick={handleSubmit}>{loading ? ( <div className="l">
                                    <LottieAnimation data={loader}/>
                                </div>): (<BsSendFill/>)}</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    return {
         loading: state?.todopost?.loading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchtodo: () => dispatch(fetchtodo()),  
        posttodo: (postState, history)=> dispatch(posttodo(postState, history))  
    };
}; 
 
export default connect(mapStoreToProps, mapDispatchToProps)(Form);