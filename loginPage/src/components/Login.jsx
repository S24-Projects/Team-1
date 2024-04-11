function Login(){
    return(
        <div className="max-w-md w-full">
        <div className="my-8">
          <h1 className="flex text-5xl font-semibold justify-center">
            Log In
          </h1>
        </div>
        <form className=" outline-0">
          <div className="mb-4 flex justify-center">
            <input
              type="email" //EMAIL
              name="user_email"
              placeholder="Email"
              className=" w-1/2 px-3 py-3 border rounded-xl bg-gray
                          focus:border-blue-500 dark:text-black font-semibold "
              required
            ></input>
          </div>
          <div className="mb-4 flex justify-center">
            <input
              type="password" //PASSWORD
              name="user_password"
              placeholder="Password"
              className="   w-1/2 px-3 py-3 border rounded-xl bg-gray 
                          focus:border-blue-500 dark:text-black font-semibold"
              required
            ></input>
          </div>
          <div className="mb-4">
          </div>
          
        </form>
        <div className="justify-center flex mb-1">
            <button
              type="submit"
              value="Send"
              className=" px-3 py-2 rounded-2xl font-semibold text-white transition-all duration-500 bg-gradient-to-br to-teal-500 via-cyan-600 from-teal-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Submit
            </button>
          </div>
            <p className="justify-center flex mb-1 font-semibold whitespace-pre">
                Don't have an account ?<span className="">  <a href = "" className="text-teal-400 hover:underline">Sign up</a> </span>
            </p>
            <p className="justify-center flex mb-1 font-semibold whitespace-pre">
                <span className="">  <a href = "" className="text-teal-400 hover:underline">Forgot you Password?</a> </span>
            </p>
      </div>
    )
}

export default Login

// text-lg bg-teal-600 dark:text-white 
//                           rounded-2xl text-white px-3 py-2 font-semibold hover:bg-gradient-to-r from-teal-500 to-teal-700 duration-500
//                           hover:text-xl focus:outline-red-500