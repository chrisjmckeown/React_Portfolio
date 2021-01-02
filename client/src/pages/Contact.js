import React from "react";
import "../index.css";

function Contact() {
  return (
    <div className='main-body'>
      <section className='details'>
        <div className='title'>
          <hr />
          <h2>Contact Details</h2>
          <hr />
        </div>
        <p>Phone: (+61) 045072016</p>
        <p>Email: chris.j.mckeown@hotmail.com</p>
        <div className='copyright-social-media'>
          <div className='tooltip'>
            <a
              href='https://www.linkedin.com/in/chrisjmckeown/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin'></i>
            </a>
            <span className='tooltiptext'>Linkedin</span>
          </div>
          <div className='tooltip'>
            <a
              href='https://twitter.com/ChrisMckeown6'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-twitter-square'></i>
            </a>
            <span className='tooltiptext'>Twitter</span>
          </div>
          <div className='tooltip'>
            <a
              href='https://www.facebook.com/christopher.j.mckeown.3'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-facebook-square'></i>
            </a>
            <span className='tooltiptext'>Facebook</span>
          </div>
          <div className='tooltip'>
            <a
              href='https://github.com/chrisjmckeown'
              target='_blank'
              rel='noreferrer'
            >
              {" "}
              <i className='fab fa-github-square'></i>
            </a>
            <span className='tooltiptext'>Github</span>
          </div>
          <div className='tooltip'>
            <a
              href='https://www.youtube.com/playlist?list=PLa6AhacssE8HZRG7_WK1guXnVWUOinPic'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-youtube'></i>
            </a>
            <span className='tooltiptext'>Youtube</span>
          </div>
        </div>
      </section>
      <section className='contact'>
        <div className='title'>
          <hr />
          <h2>Send me a message</h2>
          <hr />
        </div>
        <form>
          <div className='form-group'>
            <label for='name'>Name</label>
            <input className='form-control' id='name' placeholder='Joe Blogs' />
          </div>
          <div className='form-group'>
            <label for='email'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='name@example.com'
            />
          </div>
          <div className='form-group'>
            <label for='message'>Message</label>
            <textarea
              className='form-control'
              id='message'
              rows='3'
              placeholder='Message'
            ></textarea>
          </div>
          <button type='submit' className='btn' id='submit'>
            Submit
          </button>
          <p id='feedback' className='feedback'></p>
        </form>
      </section>
    </div>
  );
}

export default Contact;
