import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContent from '../comp/mainContent';
import { Helmet } from 'react-helmet-async';

const Html = () => {
  return (
        <div>
       <>
       <Helmet>
        <title>Html page</title>
        <meta name="description" content="html" />
      </Helmet>

       <Header/>

      {/* <main>
      Html Page
      </main> */} 

    <MainContent text="Html" designer="" age="15" />

      <Footer/>

        </>
  </div>
  );
}

export default Html;
