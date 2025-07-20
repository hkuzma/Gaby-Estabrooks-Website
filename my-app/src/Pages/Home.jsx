import Header_Text from "../Components/Header-text";
import Image from "../Components/Image";
import headshot1 from '../Assets/Gaby_Headshot.jpg';
import raw from '../Text_Files/About_Me.txt';
import { useEffect, useState } from 'react';




function Home(){
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
        <main>
            <div className="main-content">
                <Header_Text Header="About Me" Text={headText}></Header_Text>
                <Image link={headshot1} className="Headshot"></Image>
            </div>
        </main> 
    );
}

export default Home;