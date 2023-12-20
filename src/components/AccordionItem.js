import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <h2 onClick={toggleOpen} className={isOpen ? "active" : ""}>
        {title}
      </h2>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
};

export default AccordionItem;
