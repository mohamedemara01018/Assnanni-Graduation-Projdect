import LoginForm from '@/components/login-form/LoginForm'
import loginImg from '../../assets/login-image.jpg'
import logo from '../../assets/logo.png'

function Login() {
    return (
        <div className='flex justify-center gap-10'>
            <div className="relative">
                <img src={loginImg} className='w-[400px] h-[200px] object-cover rounded-b-lg' alt="login-image" />
                <div className='absolute bottom-10 left-10 text-(--color-bg)'>
                    <h2>
                        Welcome Back
                    </h2>
                    <p className='text-(--color-border)'>
                        Access your healthcare dashboard
                    </p>
                </div>

            </div>


            <div className='bg-(--color-surface)'>
                <div>
                    <img src={logo} alt="" />
                    <span>Assnani</span>
                </div>

                <div>
                    <span> Sign In</span>
                    <span>Enter your credentials to access your account</span>
                </div>
                <div>
                    <LoginForm />
                </div>
                <div></div>

            </div>
        </div >
    )
}

export default Login