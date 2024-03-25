import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import BackgroundTransition from './components/BackgroundTransition';
import Footer from './components/Footer';

function App() { 

  return (
    <BackgroundTransition>
      <>
        {/* <Header /> */}
        <Body />
        <div className='bg-gradient-to-t from-black/20 to-transparent h-20'></div>
        <Footer />
      </>
    </BackgroundTransition>
  );
}

export default App;
