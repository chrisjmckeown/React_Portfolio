import React from "react";
import "../index.css";

function Home() {
  return (
    <div className='main-body'>
      <section className='brand-statement'>
        <div className='title'>
          <hr />
          <h2>Brand Statement</h2>
          <hr />
        </div>
        <p>
          Full Stack/Back-End Developer with extensive database development
          experience.
        </p>
        <p>
          Recently earned a certificate in full stack (MERN) development from
          Monash University (AU), and previous degrees in Information Technology
          from SIT (NZ), and Architecture from Victoria University (NZ).{" "}
        </p>
        <p>
          Extensive skills in both sql & mongodb, Javascript, Node.js, and C#
          desktop development.
        </p>
        <p>
          A creative problem solver looking to provide end user interaction with
          a difference.
        </p>
        <p>
          Successfully developed and implemented multiple Azure databases using
          secure REST MVC, and responsive interfaces to assist in the AEC
          industry.
        </p>
        <p>
          My thirst to learn new technologies, combined with a determination to
          provide cutting-edge solutions, makes me a strong addition to any
          team.
        </p>
      </section>
      <section className='photo'>
        <img
          className='contactImage'
          src='./Assets/Images/AboutMeImage.png'
          alt='Chris Mckeown'
        />
      </section>
      <section className='about'>
        <div className='title'>
          <hr />
          <h2>Bio</h2>
          <hr />
        </div>
        <p>
          I am a New Zealander, born and bread in the deep south of the South
          Island.
        </p>
        <p>
          I have travelled across most of Europe whilst working in the UK. I was
          luck enough to visit some amazing places and meeting some interest
          people.
        </p>
        <p>
          I have settled in Melbourne Australia with a beautiful wife and 2 full
          on children, currently 5 and 7.
        </p>
      </section>
    </div>
  );
}

export default Home;
