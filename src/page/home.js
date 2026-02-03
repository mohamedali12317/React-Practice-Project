import React from 'react';

import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContent from '../comp/mainContent';
import { Helmet } from 'react-helmet-async';

const Home = () => {
 return (
  <div>
       <>
       <Header/>
       <Helmet>
        <title>home page</title>
        <meta name="description" content="home page" />
      </Helmet>

      <MainContent text= "Home" designer="Designed By Mohamed" age="28">    
        
        </MainContent>     

   

    <Footer/>
      
        </>
  </div>
 );
}

export default Home;
