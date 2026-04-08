import React from 'react';
import "./mainContent.css"

const MainContent = ({ text , designer , age }) => {
 return (
        <main>
         {text} Page
         
         <br/>
         my age is {age}

         <br/>
         {designer}

      </main>  
 );
}

export default MainContent;
