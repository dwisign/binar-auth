import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className='home-page'>
            <h4>Home Page</h4>
            <Link to="/register">
                <button>Register</button>
            </Link>
            &nbsp; <button>Login</button>
        </div>
    )
}
 
export default Home;