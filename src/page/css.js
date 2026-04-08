import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContent from '../comp/mainContent';
import { Helmet } from 'react-helmet-async';

const Css = () => {
 return (
  <div>
       <>
       <Helmet>
        <title>css page</title>
        <meta name="description" content="css page" />

        <style type="text/css">{`
          h1{
            // font-size:15px;
          }
        `}
        </style>
      </Helmet>
       <Header> </Header>

       <MainContent text="Css" age="21"/>

        <Footer/>
    </>
  </div>
 );
}

export default Css;
