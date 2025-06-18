
import phone from '../assets/Images/dl.beatsnoop.png';
import Google from '../assets/Icons/Icon-Google.png'

const Signup = () => {
  return (
    <>
      

      <section className="mt-10 mx-auto max-w-5xl bg-[#CBE4E8] rounded-xl shadow-lg flex overflow-hidden ">
        
        <div className="w-1/2 flex items-center justify-center p-6">
          <img
            src={phone}
            alt="Phone Illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>

        <div className="w-1/2 flex items-center justify-center p-10 bg-white">
          <form className="w-full max-w-[320px] flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Create An Account
            </h1>
            <h2>Enter your detail below</h2>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Enter your email or phone number"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-red-500 text-white p-3 rounded-md "
            >
              Create Account
            </button>
           <button
  className="bg-white border border-gray-300 p-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors w-full"
  onClick={() => {
    // Handle Google Auth here
    window.location.href = "/signup"; // Replace with actual Google OAuth if needed
  }}
>
  <img src={Google} alt="Google icon" className="w-5 h-5" />
  <span className="text-blue-500">Continue with Google</span>
</button>

            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
