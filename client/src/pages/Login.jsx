import React from 'react'

const Login = () => {
    return (
        <div className='w-full'>
            <h1 className='font-bold text-lg text-center mb-4'>Login</h1>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
            </form>
        </div>
    )
}

export default Login