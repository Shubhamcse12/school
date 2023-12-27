// Home.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import {  faFutbol, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import './Home.css';






const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState('SCHOOL');

 
  const images = {
    SCHOOL: ['/ga.jpg', '/ga1.jpg', '/ga2.jpg', '/ga3.jpg', '/ga4.jpg', '/ga5.jpg', '/ga6.jpg', '/ga7.jpg', '/ga8.jpg'],
    SPORTS: ['/SP1.jpeg', '/SP2.jpeg', '/SP3.jpg', '/SP4.jpeg', '/SP5.jpeg'],
    ARTS: ['/AR1.jpg', '/AR2.jpg', '/AR3.jpg', '/AR4.jpg', '/AR5.jpg'],
  }[selectedCategory];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };




  return (
    <>
      <div className="container">
        <div className="center-container">
          <div className="logo">
            <img src="/lnjpit.svg" alt="Logo" />
          </div>
          <div className="scholl">
            <h1>LOKNAYAK JAIPRAKASH INSTITUTE OF TECHNOLOGY</h1>
            <h4>GOD WISDOM TRUTH</h4>
            <h4>Divine Nagar, Jaynagar, Bihar-847226, is a Central Board of Secondary Education, New Delhi,</h4>
            <h4> affiliated school.</h4>
          </div>
        </div>


        <div className="line"></div>

        <div className="news">
          <div className="n_heading">
            <FontAwesomeIcon icon={faNewspaper} size="3x" color="red" />
            <h1 style={{ marginLeft: '10px' }}>News</h1>
          </div>
          <h3>Latest updates to our site</h3>

           <div className="news_section">
           
            <a href="https://github.com/Shubhamcse12" target="_blank" rel="noopener noreferrer">
              <img
                src="bell2.gif" 
                alt="Notifications"
                className="news_img"
              />
              <p>Notifications</p>
            </a>
            
            
            <a href="www.linkedin.com/in/shubhamcse12" target="_blank" rel="noopener noreferrer">
              <img
                src="clock.svg" 
                alt="Class Schedule"
                className="news_img"
              />
              <p>Class Schedule</p>
            </a>

            
            <a href="mailto:you@example.com">
              <img
                src="schedule.svg" 
                alt="Calendar"
                className="news_img"
              />
              <p>Calendar</p>
            </a>
            

            
            <a href="mailto:you@example.com">
              <img
                src="mail.svg" 
                alt="Exam"
                className="news_img"
              />
              <p>Exam</p>
            </a>

            
            <a href="mailto:you@example.com">
              <img
                src="pmd02.png" 
                alt="PMD"
                className="news_img"
              />
              <p>PMD</p>
            </a>

          </div>


        </div>


        <div className="line"></div>


        <div className="news_event">
              <div className="ne_heading">
                  <img
                    src="sound.gif" 
                    alt="news_event"
                    className="ne_img"
                  />
                  <h1 style={{ marginLeft: '10px' }}>news_event</h1>
              </div>

            <div className="ne_section">
                
            </div>
        </div>


        <div className="line"></div>


        <div className="about">
            <div className="left">
                <img
                src="about.jpg" 
                alt="about"
                className="ab_img"
                />
                <h3>Affiliated to CBSE, New Delhi</h3>
                <h3>Affiliation No.: 330384 || School Code: 65393</h3>
                <h3>Co-education School</h3>
                <h3>Medium of Instruction: English</h3>
                <p>Our curriculum emphasises broad and balanced study across a wide range of subjects. The curriculum envelops learners' skills in creative thinking, enquiry and problem solving, and is structured so that they attain both practical skills and theoretical knowledge.</p>

            </div>

            <div className="right">
                <div className="right_heading">
                    <img
                    src="bell2.gif" 
                    alt="Admission Opent"
                    className="adm_img"
                    />
                    <h1 style={{ marginLeft: '10px' }}>Admission Open</h1>
                </div>

                <button className="apply">APPLY NOW</button>

                <p>Admission procedure for classes Nursery to IX & XI, as well as for RTE</p>
                <p><h3>Nursery to VIII </h3> Admission open <a href="\"> click here</a> </p>
                <p><h3>IX & XI </h3> Hurry! Limited seats <a href="\"> click here</a> </p>
                <p><h3>RTE </h3><a href="\"> click here</a> </p>
                <p><h3>Procedure </h3> How to apply <a href="\"> click here</a> </p>


                <div className="right_heading">
                    <img
                    src="doc.gif" 
                    alt="Document Verification"
                    className="adm_img"
                    />
                    <h1 style={{ marginLeft: '10px' }}>Document Verification</h1>
                </div>

                <p>Verify student's Transfer Certificate / School Leaving Certificate (SLC).</p>
                <button className="apply">CLICK HERE</button>

            </div>

        </div>



        <div className="line"></div>


       <div className="category-section">

       <div className="category-buttons">
      <button
        onClick={() => handleCategoryClick('SCHOOL')}
        className={selectedCategory === 'SCHOOL' ? 'selected' : ''}
      >
        <FontAwesomeIcon icon={faMoneyCheckAlt} size="2x" />
        <p>SCHOOL</p>
      </button>
      <button
        onClick={() => handleCategoryClick('SPORTS')}
        className={selectedCategory === 'SPORTS' ? 'selected' : ''}
      >
        <FontAwesomeIcon icon={faFutbol} size="2x" />
        <p>SPORTS</p>
      </button>
      <button
        onClick={() => handleCategoryClick('ARTS')}
        className={selectedCategory === 'ARTS' ? 'selected' : ''}
      >
        <FontAwesomeIcon icon={faPalette} size="2x" />
        <p>ARTS</p>
      </button>
    </div>

      <div className="image-grid">
        {images.map((image, index) => (
                        <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="grid-image"
                      />
        ))}
      </div>
    </div>



      </div>
    </>
  );
};

export default Home;
