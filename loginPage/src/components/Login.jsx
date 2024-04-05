function Login(){
    return(
        <div className="max-w-md w-full mx-auto align">
        <div className="my-8">
          <h1 className="flex text-6xl font-semibold justify-center">
            Log In
          </h1>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="email"
              name="user_name"
              placeholder="Email"
              className=" border-gray-500 w-full px-3 py-2 border rounded-lg bg-gray 
                          focus:border-blue-500 dark:text-black"
              required
            ></input>
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="user_email"
              placeholder="Password"
              className=" border-gray-500 w-full px-3 py-2 border rounded-lg bg-gray 
                          focus:border-blue-500 dark:text-black"
              required
            ></input>
          </div>
          <div className="mb-4">
          </div>
          <div className="justify-center flex mb-1">
            <button
              type="submit"
              value="Send"
              className=" transition-all text-lg bg-black dark:bg-blue-900 dark:text-white 
                          rounded-2xl text-white px-3 py-2 font-semibold hover:bg-gray-600 
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