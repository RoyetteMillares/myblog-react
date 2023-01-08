import React from 'react'

const Login = () => {
    return (
        <div className='flex-col px-10 py-5 bg-slate-400'>
            <h1 className='font-bold text-lg'>Login</h1>
            <form className='flex-col items-center'>
                <input type="text" placeholder='username' />
                <input type="password" placeholder='password' />
            </form>
        </div>
    )
}

export default Login