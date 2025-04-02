import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:3001/register', { name, email, password });
      console.log(result);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white bg-opacity-90 shadow-2xl rounded-2xl p-8 backdrop-blur-lg border border-white/20">
          
     
          <div className="flex justify-center">
            <img className="h-16 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="User Icon" />
          </div>

   
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-4">
            Create Your Account
          </h2>
          <p className="text-center text-sm text-gray-500">
            Join us and explore exciting features!
          </p>

        
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            
        
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Username</label>
              <input 
                id="name"
                name="name"
                type="text"
                placeholder='Enter UserName'
                required
                className="w-full px-4 py-3 mt-1 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

     
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder='Enter Email'
                required
                className="w-full px-4 py-3 mt-1 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

        
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder='Enter Password'
                required
                className="w-full px-4 py-3 mt-1 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

         
            <div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
              >
                Register Account
              </button>
            </div>
          </form>

     
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? 
            <Link to="/login" className="text-blue-700 hover:text-blue-500 font-semibold ml-1 transition duration-200">Login</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;

