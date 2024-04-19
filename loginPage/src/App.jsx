import Logo from "./components/Logo"
import Login from "./components/Login"
import './index.css'





function App() {

  return (
    <div className="text-white">
      <div className=" text-white  h-screen flex flex-col w-1/3 backdrop-blur-lg border-r-4" >
      <Logo>
      </Logo>
      <div className=" h-screen flex justify-center items-center">
        <Login>
        </Login>
      </div>
      </div>
      
    </div>
  )
}

export default App
