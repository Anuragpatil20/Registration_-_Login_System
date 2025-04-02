import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:3001/login', { email, password });
      console.log(result);
      
      if (result.data === "Success") {
        alert("Login Successfully!");
        navigate('/home');
      } else {
        alert("Incorrect email or password!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white bg-opacity-90 shadow-2xl rounded-2xl p-8 backdrop-blur-lg border border-white/20">
          
       
          <div className="flex justify-center">
            <svg className="h-16 w-16 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
            </svg>
          </div>

      
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-4">
            Welcome Back
          </h2>
          <p className="text-center text-sm text-gray-500">
            Sign in to continue
          </p>

       
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            
          
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <input 
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 mt-1 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 pl-10"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <svg className="absolute left-3 top-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </div>
            </div>

         
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input 
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-3 mt-1 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 pl-10"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg className="absolute left-3 top-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
                </svg>
              </div>
            </div>

          
            <div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
              >
                Sign In
              </button>
            </div>
          </form>

        
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? 
            <a href="/register" className="text-blue-700 hover:text-blue-500 font-semibold ml-1 transition duration-200">Sign Up</a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
