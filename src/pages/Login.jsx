import { useState } from 'react';
const Login = () => {
  const [currentState, setCurrentState] = useState('Login');


  const onSubmitHandler = async (event) =>{
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto  gap-4 bg-softwhite p-8 rounded-lg shadow-md text-charcoal font-outfit">
          
          <div className="inline-flex items-center gap-2 mb-5 mt-5">
            <p className="prata-regular text-3xl text-forest">{currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-forest'/>
          </div>
      
     {currentState === 'Login' ? '' :<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>} 
      <input type="email" className='w-full px-3 py-2 border border-forest rounded focus:outline-none focus:ring-2 focus:ring-mint' placeholder='Email' required/>
      <input type="password" className='w-full px-3 py-2 border border-forest rounded focus:outline-none focus:ring-2 focus:ring-mint' placeholder='Password' required/>


      <div className='w-full flex justify-between text-sm mt-[-8px] text-charcoal/80'>
      {currentState === 'Sign Up' ? '' :<p className='cursor-pointer hover:text-forest transition'>Forgot  your password?</p>}
      {
        currentState === 'Login' ? 
        <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:text-forest transition'>Create an account</p> 
        : 
        <p onClick={() => setCurrentState('Login')} className='cursor-pointer hover:text-forest transition'>Login Here</p>
      }

      </div>

<button className='bg-forest text-softwhite font-light px-10 py-3 rounded hover:bg-mint hover:text-forest transition'>{currentState === 'Login' ? 'Log In' : 'Sign Up'}</button>

      </form>
    </div>
  )
}

export default Login
