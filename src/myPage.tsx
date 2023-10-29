import React, { useState, ReactNode, useRef, useEffect } from "react";
import "./myPage.css";

import Menu1Content from "./Menu1Content";
import Menu2Content from "./Menu2Content";
import Menu2SubContent from './Menu2SubContent';
import Menu3Content from "./Menu3Content";
import Menu4Content from "./Menu4Content";

interface ContentProps {
  title: string;
  description: string;
}

interface ContentComponents {
    [key: string]: ReactNode;
}

const Content: React.FC<ContentProps> = ({ title, description }) => (
  <div className="content">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

function MyPage() {
    const [sidebarWidth, setSidebarWidth] = useState<number>(200);
    const [isResizing, setIsResizing] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
  
    const startResizing = (mouseDownEvent: React.MouseEvent) => {
      setIsResizing(true);
      mouseDownEvent.preventDefault();
    };
  
    const stopResizing = () => {
      setIsResizing(false);
    };
  
    const resize = (mouseMoveEvent: MouseEvent) => {
      if (isResizing && sidebarRef.current) {
        const newWidth = mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left;
        if (newWidth > 100 && newWidth < 500) { // You can set min and max width limits here
          setSidebarWidth(newWidth);
        }
      }
    };
  
    useEffect(() => {
      if (isResizing) {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
      }
  
      return () => {
        window.removeEventListener("mousemove", resize);
        window.removeEventListener("mouseup", stopResizing);
      };
    }, [isResizing, resize]);

  const [selectedMenu, setSelectedMenu] = useState<string>("Menu 1");
  const [showMenu2SubContent, setShowMenu2SubContent] = useState<boolean>(false);

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    setShowMenu2SubContent(false);
  };

  const handleShowMenu2SubContent = () => {
    setShowMenu2SubContent(true);
  };

  return (
    <div className="myPage">
      <header className="header">Header</header>
      <div className="body">

        <aside className="sidebar" ref={sidebarRef} style={{ width: `${sidebarWidth}px` }}>
            <button onClick={() => handleMenuClick("Menu 1")}>Menu 1</button>
            <button onClick={() => handleMenuClick("Menu 2")}>Menu 2</button>
            <button onClick={() => handleMenuClick("Menu 3")}>Menu 3</button>
            <button onClick={() => handleMenuClick("Menu 4")}>Menu 4</button>
            <div className="resizer" onMouseDown={startResizing}></div>
        </aside>

        <main className="main">
            {selectedMenu === 'Menu 1' && <Menu1Content />}
            {selectedMenu === 'Menu 2' && (
                <div style={{ display: 'flex', width: '100%' }}>
                <Menu2Content onShowSubContent={handleShowMenu2SubContent} />
                {showMenu2SubContent && <Menu2SubContent />}
                </div>
            )}
            {selectedMenu === 'Menu 3' && <Menu3Content />}
            {selectedMenu === 'Menu 4' && <Menu4Content />}
        </main>

      </div>
    </div>
  );
}

export default MyPage;
