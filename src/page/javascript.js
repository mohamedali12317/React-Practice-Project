import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContent from '../comp/mainContent';
import { Helmet } from 'react-helmet-async';

const Javascript = () => {
 return (
  <div>
       <>
       <Helmet>
        <title>javascript page</title>
        <meta name="description" content="javascript" />
      </Helmet>

       <Header> </Header>      

       <MainContent text="JavaScript" age="25"/>
    
    <Footer></Footer>
    
        </>
  </div>
 );
}

export default Javascript;
