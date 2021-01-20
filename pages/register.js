import Link from 'next/link'
import Head from 'next/head'
import SiteLayout from '../components/SiteLayout'

const Register = () => {

  /* TEMPORARY DISABLE
    const passwordToggle = document.querySelector('.js-password-toggle')
    
    passwordToggle.addEventListener('change', function() {
      const password = document.querySelector('.js-password'),
        passwordLabel = document.querySelector('.js-password-label')

      if (password.type === 'password') {
        password.type = 'text'
        passwordLabel.innerHTML = 'hide'
      } else {
        password.type = 'password'
        passwordLabel.innerHTML = 'show'
      }

      password.focus()
    })
  */

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Register App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-md w-full">
        <div>
          <img className="mx-auto h-24 w-auto" src="/bitss.svg" alt="Bitss" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          
        </div>
        <form className="mt-8" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div>
              <input aria-label="Username" name="username" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Username" />
            </div>
            <div className="-mt-px">
              <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
            </div>
            <div className="relative -mt-px">
              <div class="absolute inset-y-0 right-0 flex items-center px-2">
                <input class="hidden js-password-toggle" id="toggle" type="checkbox" />
                <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label" for="toggle">show</label>
              </div>
              <input class="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 pr-16 font-mono js-password" id="password" type="password" autocomplete="off"/>
              {/*<input id="toggle" aria-label="Password" name="password" type="password" required className="hidden js-password-toggle appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />*/}
              
            </div>
          </div>
          
          <div className="mt-3">
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4  text-sm leading-5 font-medium font-medium bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:border-white-700 focus:shadow-outline-indigo active:bg-white-700 transition duration-150 ease-in-out">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-white-500 group-hover:text-white-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign up with Email
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Register.layout = SiteLayout

export default Register
