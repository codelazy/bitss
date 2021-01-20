import Link from "next/link";
import styles from '../styles/Home.module.css'
import { withRouter } from 'next/router'
import _ from 'lodash';
import chunk from 'lodash/chunk';

const SiteLayout = ({ children, router }) => (
  
  <div className="antialiased">
      
      {/* 
        START :: SHOW/HIDE HEADER NAVIGATION 
      */}
      {router.pathname != '/register' && router.pathname != '/login' && router.pathname !='/results' ? (
        <div className="height-full">
          <div className="max-w-6xl mx-auto px-8 ">
            <div className="py-4 flex-shrink-0 flex header-container">

              {/*
                COMMPANY LOGO
              */}
              <Link href="/">
                <img className="h-20 w-20" src="/bitss.svg" alt="Bitss" />
              </Link>
              
              {/*
                PRIMARY NAV
              */}
              <nav className="flex header-links">
                <Link href="/login">
                  <a className="ml-8 text-base text-gray-900">Login</a>
                </Link>
                <Link href="/register">
                  <a className="ml-8 text-base bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
                    Signup
                  </a>
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:py-8">{children}</div>
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <img className="h-12 w-12" src="/bitss.svg" alt="Bitss" />
            </a>
          </footer>
        </div>
      ) : (
        // <div className="mt-2 sm:mt-0 sm:py-2">{children}</div>
        <div className="main-content">{children}</div>
      )}
  </div>
);

export default withRouter(SiteLayout);
