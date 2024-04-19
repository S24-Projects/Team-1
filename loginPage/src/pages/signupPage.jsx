import Logo from "../components/Logo";
import Signup from "../components/Signup";
import '../index.css'

function SignupPage() {
  return (
    <div className="text-white">
      <div className="h-screen flex flex-col w-1/3 backdrop-blur-lg border-r-4" flex>
      <Logo>
      </Logo>
      <div className=" h-screen flex justify-center items-center">
        <Signup>
        </Signup>
      </div>
      </div>
      
    </div>
  )
}

export default SignupPage
