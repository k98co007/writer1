import React from 'react';

interface SidebarProps {
  menus: string[];
  activeMenu: string;
  onMenuSelect: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menus, activeMenu, onMenuSelect }) => {

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
