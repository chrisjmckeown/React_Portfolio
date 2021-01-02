import React from "react";
import "../index.css";

function Education() {
  return (
    <div className='main-body'>
      <section className='education'>
        <div className='title'>
          <hr />
          <h2>Education</h2>
          <hr />
        </div>
        <div>
          <p>Monash University</p>
          <h3>Full Stack Development Certificate</h3>
          <p>2020 – 2021</p>
          <hr />
          <p>Southern Institute of Technology</p>
          <h3>
            Bachelor of Information TechnologyField Of StudyInformation
            Technology
          </h3>
          <p>2001 – 2003</p>
          <hr />
          <p>Victoria University of Wellington</p>
          <h3>BARCHField Of StudyArchitecture</h3>
          <p>1997 – 2001</p>
        </div>
      </section>
      <section className='resume'>
        <div className='title'>
          <hr />
          <h2>Resume</h2>
          <hr />
        </div>
        <div>
          <h3>
            Please find my Resume:{" "}
            <a href='Assets/Images/Web Development Resume.pdf' target='_blank'>
              here
            </a>
          </h3>
        </div>
      </section>
    </div>
  );
}

export default Education;
