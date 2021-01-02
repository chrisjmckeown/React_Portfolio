import React from "react";
import "../index.css";

function Hobbies() {
  return (
    <div className='main-body'>
      <section id='hobbies'>
        <div className='title'>
          <hr />
          <h2>Cars</h2>
          <hr />
        </div>
        <article id='cortinaMk1240'>
          <h3>Cortina Mk1 240</h3>
          <p>
            I have a keen interest in old cars. My first restoraton a{" "}
            <a
              href='https://cortinamk1240.wordpress.com/'
              target='_blank'
              rel='noreferrer'
            >
              Ford Cortina Mk1 240
            </a>
          </p>
        </article>
        <article id='cortinaMk1GT'>
          <h3>Cortina Mk1 GT</h3>
          <p>
            After getting the bug I have decided to have another go, this time a{" "}
            <a
              href='https://cortinamk1gt.wordpress.com/'
              target='_blank'
              rel='noreferrer'
            >
              Ford Cortina Mk1 GT
            </a>
          </p>
        </article>
      </section>
      <section id='hobbies'>
        <div className='title'>
          <hr />
          <h2>Printing</h2>
          <hr />
        </div>
        <article id='3dPrinting'>
          <h3>3D Printing</h3>
          <p>
            I have recently purchased 3d Printer, check out the below works of
            art!
          </p>
        </article>
      </section>
      {/* using md to force 2 columns at md size */}
      <div className='hobby-container'>
        <div className='hobby-image'>
          <div className='zoom'>
            <img
              src='./Assets/Images/Printer1.JPEG'
              alt='Un-boxing'
              title='Un-boxing'
            />
          </div>
        </div>
        <div className='hobby-image'>
          <div className='zoom'>
            <img
              src='./Assets/Images/Printer2.JPEG'
              alt='Setup and tests complete'
              title='Setup and tests complete'
            />
          </div>
        </div>
        <div className='hobby-image'>
          <div className='zoom'>
            <img
              src='./Assets/Images/Printer3.JPEG'
              alt='Bubblebee cookie cutter'
              title='Bubblebee cookie cutter'
            />
          </div>
        </div>
        <div className='hobby-image'>
          <div className='zoom'>
            <img
              src='./Assets/Images/Printer4.JPEG'
              alt='Toothpaste extractor'
              title='Toothpaste extractor'
            />
          </div>
        </div>
        <div className='hobby-image'>
          <div className='zoom'>
            <img
              src='./Assets/Images/Printer5.JPEG'
              alt='Baby shark do do do'
              title='Baby shark do do do'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
