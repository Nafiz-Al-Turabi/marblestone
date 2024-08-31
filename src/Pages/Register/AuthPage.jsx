import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import NavbarBlack from '../../Shared/Navbar/NavbarBlack';
import { AuthContext } from '../../Provider/AuthProvider';
import axiosInstance from '../../Axios/AxiosInstance';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [loginPage, setLoginPage] = useState(true);
  const { newUser, updateUser, login, user } = useContext(AuthContext);
  const location=useLocation()
  const navigate=useNavigate()
  
  const from =location.state?.from?.pathname || '/'
  const toggleAuth = () => {
    setLoginPage(!loginPage);
  };

  // Initialize the form handling
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onLoginSubmit = async (data) => {
    await login(data.email, data.password);
    if (user) {
      navigate(from, {replace: true});
    }
  };

  const onSignupSubmit = async (data) => {
    try {
      console.log("Signup data:", data);
      const userCrdential = await newUser(data.email, data.password);
      const user = userCrdential.user;
      await updateUser(data.name, data.photoURL)
      if (user) {
        // add user in database
        const userData = {
          name: data.name,
          email: data.email,
          photoURL: data.photoURL
        }
        const response = await axiosInstance.post('/users', userData);
        if (response.status === 201) {
          setLoginPage(true);
          navigate(from, {replace: true});
        }
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };


  return (
    <div className='xl:p-6'>
      <NavbarBlack />
      <div className="flex items-center justify-center min-h-screen">
        {loginPage ? (
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Login</h1>
            <form className="space-y-6" onSubmit={handleSubmit(onLoginSubmit)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: 'Email is required' })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 sm:text-sm"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  {...register('password', { required: 'Password is required' })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 sm:text-sm"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#990a05] text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                Login
              </button>
              <p className="text-center text-sm text-gray-600">
                Don't have an account? <button onClick={toggleAuth} className="text-[#990a05] hover:text-rose-700 font-medium">Sign up</button>
              </p>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Signup</h1>
            <form className="space-y-6" onSubmit={handleSubmit(onSignupSubmit)}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">User Name</label>
                <input
                  type="name"
                  id="name"
                  {...register('name', { required: 'User Name is required' })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 sm:text-sm"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: 'Email is required' })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 sm:text-sm"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  {...register('password', { required: 'Password is required' })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 sm:text-sm"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
              <div>
                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Profile Photo URL</label>
                <input
                  type="text"
                  id="photoURL"
                  {...register('photoURL')}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#990a05] text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                Signup
              </button>
              <p className="text-center text-sm text-gray-600">
                Already have an account? <button onClick={toggleAuth} className="text-[#990a05] hover:text-rose-700 font-medium">Login</button>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
