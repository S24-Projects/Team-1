function Signup(){
    return(
        <div className="max-w-md w-full">
        <div className="my-8">
          <h1 className="flex text-5xl font-semibold justify-center">
            Sign Up
          </h1>
        </div>
        <form className=" outline-0">
          <div className="mb-4 flex justify-center">
            <input
              type="name" //First Name
              name="First Name"
              placeholder="First Name"
              className=" transition-all duration-500 w-1/2 px-3 py-3 border-2 border-teal-800 rounded-xl bg-transparent backdrop-blur-lg
                          focus:bg-teal-950 font-semibold focus:outline-none"
              required
            ></input>
          </div>
          <div className="mb-4 flex justify-center">
            <input
              type="name" //Last Name
              name="Last_Name"
              placeholder="Last Name"
              className=" transition-all duration-500 w-1/2 px-3 py-3 border-2 border-teal-800 rounded-xl bg-transparent backdrop-blur-lg
                          focus:bg-teal-950 font-semibold focus:outline-none"
              required
            ></input>
          </div>
          <div className="mb-4 flex justify-center">
            <input
              type="email" //EMAIL
              name="user_email"
              placeholder="Email"
              className=" transition-all duration-500 w-1/2 px-3 py-3 border-2 border-teal-800 rounded-xl bg-transparent backdrop-blur-lg
                          focus:bg-teal-950 font-semibold focus:outline-none"
              required
            ></input>
          </div>
          <div className="mb-4 flex justify-center">
            <input
              type="password" //PASSWORD
              name="user_password"
              placeholder="Password"
              className="transition-all duration-500 w-1/2 px-3 py-3 border-2 border-teal-800 rounded-xl bg-transparent backdrop-blur-lg 
                          focus:bg-teal-950 font-semibold focus:outline-none"
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
              className=" px-3 py-2 rounded-2xl font-semibold text-white transition-all duration-500 bg-gradient-to-br to-cyan-600 via-cyan-800 from-teal-600 bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Submit
            </button>
          </div>
      </div>
    )
}

export default Signup

// text-lg bg-teal-600 dark:text-white 
//                           rounded-2xl text-white px-3 py-2 font-semibold hover:bg-gradient-to-r from-teal-500 to-teal-700 duration-500
//                           hover:text-xl focus:outline-red-500