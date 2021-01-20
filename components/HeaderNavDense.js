
import Link from "next/link";
import { withRouter } from 'next/router'
import _ from 'lodash';

const HeaderNavDense = () => {
  
  return (
    <div className="max-w-1xl mx-auto px-6 header-nav-dense" >
      <div className="py-2 flex-shrink-0 flex header-container">

        {/*
          COMMPANY LOGO
        */}
        <Link href="/">
          <img className="h-10 w-10" src="/bitss.svg" alt="Bitss" />
        </Link>
        
        {/*
          PRIMARY NAV
        */}
        <nav className="flex header-links">
          <Link href="/login">
            <a className="ml-8 text-xs text-gray-900">Login</a>
          </Link>
          <Link href="/register">
            <a className="ml-8 text-xs bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
              Signup
            </a>
          </Link>
        </nav>
      </div>
    </div>
  )

};

export default withRouter(HeaderNavDense);