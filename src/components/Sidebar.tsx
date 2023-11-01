import React from 'react';

interface SidebarProps {
  activeMenu: string;
  onMenuSelect: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, onMenuSelect }) => {
  const menus = ['avengers', 'heroes', 'marvels', 'comics', 'monsters'];

  return (
    <div className="sidebar">
      {menus.map(menu => (
        <div
          key={menu}
          className={`menu-item ${activeMenu === menu ? 'active' : ''}`}
          onClick={() => onMenuSelect(menu)}
        >
          {menu.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
