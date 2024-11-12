import React, { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    headingref.current.addEventListener("click", () => {
      setShowCanvas(!showCanvas);
    });
  }, [showCanvas]);

  return (
    <>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {showCanvas && 
        data[0].map
        ((canvasdets, index) => (
        <Canvas details={canvasdets} />))}

        <div className="w-full relative z-[2] h-screen text-white">
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
                Experience Photography with a Personal Touch
              </h3>
              <p className="text-lg font-normal w-[80%] mt-10">
                Our aim is simple: to bring your vision to life and create
                stunning images that resonate. We strive to go beyond typical
                photography, delivering work that captures the emotions, beauty,
                and significance of each occasion.
              </p>
              <p className="mt-10 text-md">Scroll</p>
            </div>
          </div>

          <div className="w-full absolute bottom-0 left-0">
            <h1 ref={headingref} className="pl-0 text-[14rem] font-normal tracking-tight leading-none">
              LensCraft Studio
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full relative   mt-32 px-10">
        {/* {data[1].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))} */}
        <div className="relative z-[1]">
          <h1 className="text-6xl tracking-tighter">
            Welcome to LensCraft Studio!
          </h1>
          <p className="text-2xl leading-[1.8] w-[80%] mt-10 font-light">
            At LensCraft Studio, we believe every moment is worth capturing and
            every photo tells a story. We specialize in creating timeless images
            that reflect the beauty of real-life moments. Our passion lies in
            providing our clients with authentic, high-quality images that they
            can cherish forever. With a unique blend of artistry and technical
            expertise, our goal is to make your experience as memorable as the
            photos we take.{" "}
          </p>

          {/* <img
          className="w-[80%] mt-10"
          src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""
        /> */}
        </div>
      </div>

      <div className="w-full relative mt-32 px-10">
        {/* {data[2].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))} */}
        <div className=" relative z-[1]">
          <h3 className="text-4xl pl-[80vw] tracking-tighter">SERVICES</h3>
          
          <p className="leading-[1.8] pl-40 w-[80%] mt-1 text-lg ">
            <span className="block mt-20">
              <strong>1. Portrait Photography:</strong> Capture the essence of
              individuals, families, or groups with creative portrait sessions.
            </span>
            <hr className="my-10" />

            <span className="block mt-2">
              <strong>2. Event Photography:</strong> Document the special
              moments of your life, from weddings and birthdays to corporate
              events.
            </span>
            <hr className="my-10" />

            <span className="block mt-2">
              <strong>3. Product Photography:</strong> Highlight your products
              with professional images for websites, catalogs, and social media.
            </span>
            <hr className="my-10" />

            <span className="block mt-2">
              <strong>4. Travel & Landscape Photography:</strong> Stunning
              images that tell stories from around the world, available for
              purchase or licensing.
            </span>
            <hr className="my-10" />
          </p>
          <h1 className="pt-10 text-center text-7xl">Where Every Picture Tells Your Story</h1>
        </div>
        <div className="w-full relative mt-32 px-10">
        {/* {data[2].map((canvasdets, index) => (
        <Canvas details={canvasdets} />
      ))} */} 
      <div className="text-center relative z-[1]">
        <h2 className="text-2xl">
          Drop us a line at hello@thirtysixstudio.com or use the form below.</h2>
      <p>Email: info@capturedmoments.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Location: 123 Photography Lane, YourCity</p>
      </div>
      </div>
      <h1 className="text-7xl pt-20 m-10">Capture today, cherish tomorrow. 
        <span>Let us create lasting memories together.</span></h1>
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
