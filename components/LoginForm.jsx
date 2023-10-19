import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="grid place-content-center h-screen">
      <div className="shadow-lg p-5 border-t-4 border-green-400 rounded-lg">
        <h1 className="text-xl font-bold my-4">Login</h1>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="bg-green-600 text-white font-bold py-2 px-6 cursor-pointer">
            Login
          </button>
          <div className="bg-red-500 text-white w-fit px-3 py-1 text-sm rounded-md mt-2">
            Error message
          </div>
          <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
