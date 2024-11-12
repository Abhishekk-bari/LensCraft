import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {/* {data[0].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))} */}

        <div className="w-full h-screen text-white">
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-regular">TS</div>
            <div className="links flex gap-10">
              {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="text_container w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.1]">
                We build immersive digital experience for brands with a purpose.
              </h3>
              <p className="text-lg font-normal w-[80%] mt-10">
                We are team of designer, developer and strategists who are
                passionate about creating digital experience that are both
                beautiful & functional.
              </p>
              <p className="mt-10 text-md">Scroll</p>
            </div>
          </div>
          
          
          <div className="w-full absolute bottom-0 left-0">
            <h1 className="pl-5 text-[18rem] font-normal tracking-tight leading-none">
              tsstudios
            </h1>
          </div>
        </div>
      </div>
      
      <div className="w-full relative h-screen  mt-32 px-10">
        {showCanvas &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <h1 className="text-8xl tracking-tighter">about the brand</h1>
        <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light">
          we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.
        </p>

        <img
          className="w-[80%] mt-10"
          src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""
        />
      </div>


      

      {/* <div className="w-full relative min-h-screen">
      {data[1].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))}
    </div>
    <div className="w-full relative min-h-screen">
      {data[2].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))}
    </div>
    <div className="w-full relative min-h-screen">
      {data[3].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))}
    </div> */}
    </>
  );
}

export default App;
