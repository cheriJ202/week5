import Head from 'next/head';
import Link from 'next/link';

export default function Layout( {children, home} ) {
  return (
    <div>
    <Head>
    <title>Basic Next.js</title>
    </Head>
      <header>
      <nav>
      <a href="https://www.santarosa.edu">Visit SRJC</a>
      </nav>
      </header>
      <main>
        {children} 
      </main>
      {!home && (
          <Link href="/" classname="btn btn-primary mt-3">
           Back to home
          </Link>
          
      ) 
      }
      <footer>
      <p>The footer</p>
      </footer>
    </div>
  );
}