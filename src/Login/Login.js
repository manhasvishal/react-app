import Button from "../Button/Button";
import Input from "../Input/Input";
import './Login.css'

function Login() {
    return (
    <div className="container">
        <h3>Login</h3>
        <Input text="Enter username"/>
        <Input text="Enter password" />
        <Button />
    </div>
    )
}

export default Login;