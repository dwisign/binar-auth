import {useState} from "react"
import { Button, FormGroup } from 'reactstrap';
import axios from 'axios'
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('');


    const handleEmail = (e) => {
        //console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlepassword = (e) => {
        //console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        //console.log(Email, Password)
        const payload = {
            email: email,
            password: password
        }

        axios
        .post('https://reqres.in/api/register', payload)
        .then((response) => {
            setToken(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return ( 
        <div className="register-wrap">
            <div className="form-register">
                <h4 className="mb-3">Register</h4>

                {!!token && <div className="alert alert-success">Login Berhasil</div>}  

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
                    <Button onClick={handleRegister} className="btn">Register</Button>
                </FormGroup>
            </div>
        </div>
    )
}
 
export default Register