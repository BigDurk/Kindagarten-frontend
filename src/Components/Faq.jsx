import React, { useState } from "react";
// import "./FAQ.css"; // Import your CSS file for styling

const FAQ = () => {
const AccordionData = [
  {
    id: "collapseOne",
    title: "What is kindergarten learning software?",
    content:
      "Kindergarten learning software is a specialized tool designed to facilitate and enhance the educational experience of young children in kindergarten. It offers interactive activities, curriculum support, and assessment tools tailored to early childhood development.",
  },
  {
    id: "collapseTwo",
    title: "What are the key features of kindergarten learning software?",
    content:
      "Key features include interactive learning modules, age-appropriate curriculum materials, progress tracking, assessment tools, customizable lesson plans, multimedia resources, and parent engagement features such as progress reports and communication portals.",
  },
  {
    id: "collapseThree",
    title:
      "How does kindergarten learning software benefit educators and children?",
    content:
      "It helps educators create engaging and effective lesson plans, adapt instruction to individual learning styles, track student progress, and identify areas for improvement. For children, it provides stimulating learning experiences that promote cognitive development, creativity, and critical thinking skills.",
  },
  {
    id: "collapseFour",
    title: "Is kindergarten learning software safe for young children?",
    content:
      "Reputable kindergarten learning software providers prioritize safety and privacy. They implement stringent security measures such as age-appropriate content filters, secure logins, and data encryption to ensure a safe and secure learning environment for young users.",
  },
  {
    id: "collapseFive",
    title: "Can kindergarten learning software support parental involvement?",
    content:
      "Absolutely, it fosters parental engagement by providing parents with insights into their child's learning progress, access to educational resources and activities to support learning at home, and communication channels to collaborate with teachers and stay informed about their child's educational journey.",
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="accordion-container w-100 mt-4 mt-lg-0">
      <h4>CHOOSE YOUR OWN GRADE LEVEL</h4>
      <h1>Guide To Preschool</h1>
      {AccordionData.map((item, index) => (
        <div
          key={item.id}
          onClick={() => handleAccordionClick(index)}
          className={`accordion-item ${openIndex === index ? "open" : ""}`}
        >
          <div className="accordion-header">
            <div className="accordion-title">{item.title}</div>
            <div className="accordion-arrow">
              <span class="material-symbols-outlined mb-0">expand_more</span>
            </div>
          </div>
          <div className="accordion-content">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
