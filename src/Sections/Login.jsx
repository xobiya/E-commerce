
import phone from '../assets/Images/dl.beatsnoop.png';
import Google from '../assets/Icons/Icon-Google.png';

const Login = () => {
  return (
    <>
      <section className="mt-10 mx-auto max-w-5xl bg-[#CBE4E8] rounded-xl shadow-lg flex overflow-hidden">
        
        {/* Left Side: Image */}
        <div className="w-1/2 flex items-center justify-center p-6">
          <img
            src={phone}
            alt="Phone Illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-1/2 flex items-center justify-center p-10 bg-white">
          <form className="w-full max-w-[320px] flex flex-col gap-5">
  <h1 className="text-3xl font-bold text-center text-gray-800">
    Welcome Back
  </h1>
  <h2 className="text-center text-gray-600">Login to your account</h2>

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

  {/* Forgot Password Link */}
  <div className="text-right">
    <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
      Forgot Password?
    </a>
  </div>

  <button
    type="submit"
    className="bg-red-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
  >
    Login
  </button>

  <button
    className="bg-white border border-gray-300 p-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors w-full"
    onClick={() => {
      window.location.href = "/login"; // Replace with Google OAuth URL if needed
    }}
  >
    <img src={Google} alt="Google icon" className="w-5 h-5" />
    <span className="text-blue-500">Continue with Google</span>
  </button>

  <p className="text-center text-gray-600">
    Don’t have an account?{' '}
    <a href="/signup" className="text-blue-500 hover:underline">
      Create Account
    </a>
  </p>
</form>

        </div>
      </section>
    </>
  );
};

export default Login;
