function Login(){
    return(
        <div className="max-w-md w-full mx-auto align">
        <div className="my-8">
          <h1 className="flex text-5xl font-semibold justify-center">
            Log In
          </h1>
        </div>
        <form>
          <div className="mb-4 flex justify-center">
            <input
              type="email" //EMAIL
              name="user_name"
              placeholder="Email"
              className=" w-1/2 px-3 py-2 border rounded-xl bg-gray 
                          focus:border-blue-500 dark:text-black font-semibold"
              required
            ></input>
          </div>
          <div className="mb-4 flex justify-center">
            <input
              type="password" //PASSWORD
              name="user_email"
              placeholder="Password"
              className="   w-1/2 px-3 py-2 border rounded-xl bg-gray 
                          focus:border-blue-500 dark:text-black font-semibold"
              required
            ></input>
          </div>
          <div className="mb-4">
          </div>
          <div className="justify-center flex mb-1">
            <button
              type="submit"
              value="Send"
              className=" transition-all text-lg bg-teal-500 dark:text-white 
                          rounded-2xl text-white px-3 py-2 font-semibold hover:bg-teal-600 
                          hover:text-xl focus:outline-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
}

export default Login