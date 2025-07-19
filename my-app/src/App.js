import { useEffect, useState } from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Image from './Components/Image';
import Header_Text from './Components/Header-text';
import './css/app.css';
import headshot1 from './Assets/Gaby_Headshot.jpg'
import raw from './Text_Files/About_Me.txt'

function App() {
  const [headText, setHeadText] = useState("");

  useEffect (() => {
    fetch(raw)
      .then(r => r.text())
      .then(text => {
        setHeadText(text);
        console.log('text decoded:', text);
    });
  });


   
  return (
    <> 
      <Nav></Nav>
      <main>
        <div className="main-content">
          <Header_Text Header="About Me" Text={headText}></Header_Text>
          <Image link={headshot1} className="Headshot"></Image>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
