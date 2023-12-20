import React from "react";
import AccordionItem from "./AccordionItem"; // Update path to your actual file

const ExampleAccordion = () => {
  return (
    <div>
      <AccordionItem title="Section 1">
        This is the content of section 1.
      </AccordionItem>
      <AccordionItem title="Section 2">
        This is the content of section 2.
      </AccordionItem>
    </div>
  );
};

export default ExampleAccordion;
