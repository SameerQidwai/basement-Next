import Head from 'next/head'
import HomeIndex from '../pages/home/index'

export default function Home() {
  
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeIndex/>   
     
    </div>     
  )
}


