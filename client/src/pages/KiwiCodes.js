import React from "react";
import "../index.css";

function KiwiCodes() {
  return (
    <div className='main-body'>
      <section className='kiwicodes'>
        <div className='title'>
          <hr />
          <h2>About</h2>
          <hr />
        </div>
        <p>
          Kiwi Codes Solutions is a progressive and innovative company based in
          New Zealand, specializing in the development of Autodesk Revit add-ons
          that enhance and increase productivity on a day to day basis. In a
          very short period of time, Kiwi Codes has become globally recognized,
          with thousands of customers using their products for Autodesk Revit.
        </p>
      </section>
      <section className='kiwicodes'>
        <div className='title'>
          <hr />
          <h2>KiwiCodes present</h2>
          <hr />
        </div>
        <div id='dotnet'>
          <p>
            I have been developing/coding using VB and C# for a number of years
            now as{" "}
            <a
              href='http://www.kiwicodes.com/index.php'
              target='_blank'
              rel='noreferrer'
            >
              KiwiCodes
            </a>
            , working with Autodesk's{" "}
            <a
              href='https://www.autodesk.com.au/products/revit/overview?plc=RVT&term=1-YEAR&support=ADVANCED&quantity=1'
              target='_blank'
              rel='noreferrer'
            >
              Revit
            </a>{" "}
            API to build apps,{" "}
            <a
              href='https://apps.autodesk.com/RVT/en/Detail/Index?id=2077603980990329161&appLang=en&os=Win64'
              target='_blank'
              rel='noreferrer'
            >
              Bonus Tools
            </a>{" "}
            for the AEC industry.
          </p>
        </div>
      </section>
      <section className='kiwicodes'>
        <div className='title'>
          <hr />
          <h2>KiwiCodes future</h2>
          <hr />
        </div>
        <div id='fullstack'>
          <p>
            Autodesk continue to developed their{" "}
            <a
              href='https://forge.autodesk.com/'
              target='_blank'
              rel='noreferrer'
            >
              Forge
            </a>{" "}
            platform, providing many Node.js examples to kickstart developers.
          </p>
          <p>
            Here at KiwiCodes are doing what we can to upskill and ensure we are
            ready for the cloud future.
          </p>
        </div>
      </section>
      <section className='kiwicodes'>
        <div className='title'>
          <hr />
          <h2>Links to key information</h2>
          <hr />
        </div>
        <p>For more info:</p>
        <ul>
          <li>
            <a
              target='_blank'
              href='http://www.kiwicodes.com/index.php'
              rel='noreferrer'
            >
              View KiwiCodes Website
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://apps.autodesk.com/RVT/en/Detail/Index?id=2077603980990329161&appLang=en&os=Win64'
              rel='noreferrer'
            >
              View Autodesk APP Store for download
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='http://www.kiwicodes-support.com/MediaWiki:Sidebar'
              rel='noreferrer'
            >
              View KiwiCodes Wiki site
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://www.youtube.com/playlist?list=PLa6AhacssE8HZRG7_WK1guXnVWUOinPic'
              rel='noreferrer'
            >
              View KiwiCodes youtube channel
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default KiwiCodes;
