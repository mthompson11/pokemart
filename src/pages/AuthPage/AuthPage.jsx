import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from '../../components/LoginForm/LoginForm'
import logo from '../../components/AppBar/logo.png'
import './AuthPage.css'

export default function AuthPage({ setUser }){
    return(
        <main className="auth-main">
            <img src={ logo } alt='' />
            <div className="forms-container">
                <SignUpForm setUser={ setUser }/>
                <LoginForm setUser={ setUser }/>
            </div>
        </main>
    )
}