import React from "react";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import Nprogress from 'nprogress';

Router.onRouterChangeStart = (url) =>{console.log(url);return Nprogress.start();}
Router.onRouterChangeComplete = () => Nprogress.done();
Router.onRouterChangeError = () => Nprogress.done();

const Layout = (props) => {
  return (
    <div className="root">
      <Head>
        <title>NEXT PORTIFOLIO</title>
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>Hire ME</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </header>
        <h1>{props.title}</h1>
        {props.children}
      <footer>&copy; {new Date().getFullYear()}</footer>
      <style jsx>
          {`
            .root{
                display: grid;
                place-items: center; 
            }
            header {
                width: 100%;
                display: flex;
                justify-content: space-around;
                padding:1em;
                font-size: 1.2rem;
                background: indigo;
            }
            header a{
                color: darkgrey;
                text-decoration: none;
            }
            header a:hover{
                font-weight: bold;
                color: lightgrey;
            }
            footer {
                padding: 1em;
            }
          `}
      </style>

    </div>
  );
};

export default Layout;
