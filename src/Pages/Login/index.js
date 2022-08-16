import {useState} from "react"
import axios from 'axios'
import { Button, FormGroup } from 'reactstrap';
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [res, setRes] = useState()
    const navigate = useNavigate()

    const handleEmail = (e) => {
        //console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlepassword = (e) => {
        //console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        //console.log(Email, Password)
        const payload = {
            email: email,
            password: password
        }

        axios
        .post('https://reqres.in/api/login', payload)
        .then((response) => {
            //setRes(response.data)
            localStorage.setItem('res', res.data.token)
            navigate('/dashboard')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (  
        <div className="register-wrap">
            <div className="form-register">
                <h4>Login</h4>
                {!!res && (<div className="alert alert-success">Login Berhasil</div>)}

                <FormGroup>
                    <input 
                        onChange={(e) => handleEmail(e) } 
                        type="email" 
                        placeholder='Email' 
                    />
                </FormGroup>
                <FormGroup>
                    <input 
                        onChange={(e) => handlepassword(e)} 
                        type="password" 
                        placeholder='Password' 
                    />
                </FormGroup>

                <FormGroup>
                    <Button 
                        onClick={handleLogin} 
                        className="btn">
                        Login
                    </Button>
                </FormGroup>
            </div>
        </div>
    )
}
 
export default Login