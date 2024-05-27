// Fade.js

import React, { useEffect, useState } from "react";

const Fade = ({ show, children, ...props }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    
    if (!show) setRender(false);
  };
  
  return (
    shouldRender && (
      <div
        style={{ animation: `${show ? "fadeIn" : "fadeOut"} 1s forwards`, "animation-fill-mode": "forward"}}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Fade;
