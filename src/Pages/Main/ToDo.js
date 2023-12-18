import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';
import { SiGoogleanalytics } from 'react-icons/si';
import './ToDo.css'
import LottieAnimation from '../../lotties';
import empty from '../../Assets/empty.json'
import loading1 from '../../Assets/loading.json'
import Form from '../../Components/Form/Form';
import Card from '../../Components/Card/Card';
import { fetchtodo, posttodo } from '../../Redux/Todo/TodoAction';
import { FaPowerOff } from 'react-icons/fa';
import { logout } from '../../Redux/Auth/Login/LoginAction';
const ToDo = ({ todo, fetchtodo, loading, logout }) => {
    const [show, setShow] = useState(false)
    const history = useNavigate();
    const [color, setColor] = useState("")
    const handleShow = () => {
        setShow(!show)
    }
    const handleLogout = () =>{
        logout()
        history('/login')
    }
    useEffect(() => {
        fetchtodo();
    }, [])
    return (
        <div className="todo onboard">
            <div className="onboard-inner">
                <div className="todo-head-inner">
                    <div className="todo-head-left">
                        <h2 className="todo-head">Today</h2>
                        <p className="todo-text">What do you have to do Today? keep them organised</p>
                    </div>
                    <div className="todo-logout" onClick={handleLogout}>
                        <FaPowerOff/>
                    </div>
                </div>
                <div className="todo-body">
                    {(todo.length === 0) ? (<div className="empty">
                        <LottieAnimation data={empty} />
                        <p>No Do's Yet😊</p>
                    </div>) :
                        (
                            <div className="todos">
                                {loading ? (
                                    <div className="todo-loading">
                                        <div className="loading-2">
                                            <LottieAnimation data={loading1} />
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        {todo?.map((todos) => {
                                            return (
                                                <Card todo={todos}/>
                                            )
                                        })}
                                    </div>
                                )}
                                {/* </div> */}
                            </div>)}
                    <div className="todo-buttons">
                        <div className="view">
                            <p className='add-text'><SiGoogleanalytics /></p>
                        </div>
                        <div className="add" onClick={handleShow}>
                            <p className='add-text'><FiPlus /></p>
                        </div>
                    </div>
                </div>
                {show && (<Form toggle={handleShow} show={setShow} />)}

            </div>
            <div className="blob2">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "rgb(194, 229, 156)" }}></stop>
                            <stop offset="100%" style={{ stopColor: "rgb(100, 179, 244)" }}></stop>
                        </linearGradient>
                    </defs>
                    <path id="blob" fill="#34b5ec23">
                        <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M420,298Q382,346,347,393.5Q312,441,249.5,442Q187,443,119,419Q51,395,50.5,322.5Q50,250,50,177.5Q50,105,118,79Q186,53,251.5,49Q317,45,384.5,74Q452,103,455,176.5Q458,250,420,298Z;
                        
                        M459.5,316.5Q433,383,370.5,406Q308,429,249.5,429.5Q191,430,126.5,408.5Q62,387,36.5,318.5Q11,250,38.5,183Q66,116,129,93.5Q192,71,247.5,78.5Q303,86,357,109.5Q411,133,448.5,191.5Q486,250,459.5,316.5Z;

                        M443,304.5Q401,359,353,389.5Q305,420,248,425.5Q191,431,139,399.5Q87,368,49.5,309Q12,250,34.5,180Q57,110,119,74Q181,38,250,37.5Q319,37,350.5,95.5Q382,154,433.5,202Q485,250,443,304.5Z;

                        M469.5,319Q440,388,380,427Q320,466,261,431.5Q202,397,140.5,385.5Q79,374,59.5,312Q40,250,70,195.5Q100,141,150,118Q200,95,249,99Q298,103,347,123.5Q396,144,447.5,197Q499,250,469.5,319Z;

                        M425,304.5Q399,359,358.5,410Q318,461,246,473Q174,485,121.5,433.5Q69,382,82.5,316Q96,250,80,182.5Q64,115,120.5,71Q177,27,249.5,27.5Q322,28,351.5,91.5Q381,155,416,202.5Q451,250,425,304.5Z;

                        M420,298Q382,346,347,393.5Q312,441,249.5,442Q187,443,119,419Q51,395,50.5,322.5Q50,250,50,177.5Q50,105,118,79Q186,53,251.5,49Q317,45,384.5,74Q452,103,455,176.5Q458,250,420,298Z;
                        "></animate>
                    </path>
                </svg>
            </div>
            <div className="blob2">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "rgb(194, 229, 156)" }}></stop>
                            <stop offset="100%" style={{ stopColor: "rgb(100, 179, 244)" }}></stop>
                        </linearGradient>
                    </defs>
                    <path id="blob" fill="#34b5ec23">
                        <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M420,298Q382,346,347,393.5Q312,441,249.5,442Q187,443,119,419Q51,395,50.5,322.5Q50,250,50,177.5Q50,105,118,79Q186,53,251.5,49Q317,45,384.5,74Q452,103,455,176.5Q458,250,420,298Z;
                        
                        M459.5,316.5Q433,383,370.5,406Q308,429,249.5,429.5Q191,430,126.5,408.5Q62,387,36.5,318.5Q11,250,38.5,183Q66,116,129,93.5Q192,71,247.5,78.5Q303,86,357,109.5Q411,133,448.5,191.5Q486,250,459.5,316.5Z;

                        M443,304.5Q401,359,353,389.5Q305,420,248,425.5Q191,431,139,399.5Q87,368,49.5,309Q12,250,34.5,180Q57,110,119,74Q181,38,250,37.5Q319,37,350.5,95.5Q382,154,433.5,202Q485,250,443,304.5Z;

                        M469.5,319Q440,388,380,427Q320,466,261,431.5Q202,397,140.5,385.5Q79,374,59.5,312Q40,250,70,195.5Q100,141,150,118Q200,95,249,99Q298,103,347,123.5Q396,144,447.5,197Q499,250,469.5,319Z;

                        M425,304.5Q399,359,358.5,410Q318,461,246,473Q174,485,121.5,433.5Q69,382,82.5,316Q96,250,80,182.5Q64,115,120.5,71Q177,27,249.5,27.5Q322,28,351.5,91.5Q381,155,416,202.5Q451,250,425,304.5Z;

                        M420,298Q382,346,347,393.5Q312,441,249.5,442Q187,443,119,419Q51,395,50.5,322.5Q50,250,50,177.5Q50,105,118,79Q186,53,251.5,49Q317,45,384.5,74Q452,103,455,176.5Q458,250,420,298Z;
                        "></animate>
                    </path>
                </svg>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    return {
        todo: state?.todo?.data,
        loading: state?.todo?.loading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchtodo: () => dispatch(fetchtodo()),
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(ToDo);