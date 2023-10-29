import React from 'react';

interface Menu2ContentProps {
  onShowSubContent: () => void;
}

const Menu2Content: React.FC<Menu2ContentProps> = ({ onShowSubContent }) => {
  return (
    <div>
      <h2>Content for Menu 2</h2>
      <p>This is the description for Menu 2. 1230943534574354545</p>
      <button onClick={onShowSubContent}>Show Sub Content</button>
    </div>
  );
}

export default Menu2Content;
