import React, { useState } from 'react';
import './ne_section.css';

const NeSection = () => {
  const [activeSection, setActiveSection] = useState('section1');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div>
        <nav>
          <button onClick={() => handleSectionClick('section1')}>Section 1</button>
          <button onClick={() => handleSectionClick('section2')}>Section 2</button>
          <button onClick={() => handleSectionClick('section3')}>Section 3</button>
        </nav>

        <div>
          {activeSection === 'section1' && <div>Content for Section 1</div>}
          {activeSection === 'section2' && <div>Content for Section 2</div>}
          {activeSection === 'section3' && <div>Content for Section 3</div>}
        </div>
      </div>
    </>
  );
};

export default NeSection;
