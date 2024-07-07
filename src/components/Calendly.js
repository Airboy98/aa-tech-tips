import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="Calendly">
      <InlineWidget
        url="https://calendly.com/aaron-turner117/it-appointment?hide_gdpr_banner=1&text_color=0f3455&primary_color=3c709f"
        styles={{
          height: "660px",
        }}
      ></InlineWidget>
    </div>
  );
};

export default Calendly;
