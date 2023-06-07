import React from "react";

const ThemeTogglerBtn = () => {
  return (
    <div class='wrapper'>
      <input
        type='checkbox'
        name='checkbox'
        class='switch'
        onChange={() => {
          document.body.classList.toggle("light-theme-varaibles");
        }}
      />
    </div>
  );
};

export default ThemeTogglerBtn;
