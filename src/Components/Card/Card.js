import { BsTrash3 } from 'react-icons/bs';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './Card.css'
import {useState} from 'react'
import { connect } from 'react-redux';
import loader from '../../Assets/loader.json'
import { deleteaction } from '../../Redux/Todo/Delete/DeleteAction';
import { fetchtodo } from '../../Redux/Todo/TodoAction';
import LottieAnimation from '../../lotties';
const Card = ({todo, deleteaction, fetchtodo, loading}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleDelete = (id) =>{
        deleteaction(id, ()=>{
            fetchtodo()
        })
    }
    return ( 
        <div className="card">
            <div className="card-color" style={todo.priority==="1" ? {background: "#FF486A"} : todo.priority==="2" ? {background: "#24A19C"} : {background: "#218EFD"}}>
                
            </div>

            <div className="card-body">
                <div className="card-task">
                    <label className="checkbox">
                        <input 
                            type='checkbox' 
                            className='checkbox-field'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        ></input>
                        <span className="checkbox-span"></span>
                        <p className="task" style={{ textDecoration: isChecked ? 'line-through' : 'none', color: isChecked && "#767e8cac"}}>{todo.todo}</p>
                    </label>
                    <div className="delete" onClick={()=>{handleDelete(todo._id)}}>
                        {loading ? ( 
                            <div className="loading-2">
                                <LottieAnimation data={loader}/>
                            </div>
                        ): (<BsTrash3/>)}
                        
                    </div>
                </div>
                <div className="card-time">
                    <p>{formatDistanceToNow(new Date(todo.createdAt), {addSuffix: true})}</p>
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    return {
        loading: state?.delete?.loading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteaction: (id, history) => dispatch(deleteaction(id, history)),
        fetchtodo: () => dispatch(fetchtodo()),
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Card);