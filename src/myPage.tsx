import React, { useState, ReactNode } from "react";
import "./myPage.css";

import Menu1Content from "./Menu1Content";
import Menu2Content from "./Menu2Content";
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
  const [selectedMenu, setSelectedMenu] = useState<string>("Menu 1");

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  const contentComponents: ContentComponents = {
    "Menu 1": <Menu1Content />,
    "Menu 2": <Menu2Content />,
    "Menu 3": <Menu3Content />,
    "Menu 4": <Menu4Content />,
  };

  return (
    <div className="myPage">
      <header className="header">Header</header>
      <div className="body">
        <aside className="sidebar">
            <button onClick={() => handleMenuClick("Menu 1")}>Menu 1</button>
            <button onClick={() => handleMenuClick("Menu 2")}>Menu 2</button>
            <button onClick={() => handleMenuClick("Menu 3")}>Menu 3</button>
            <button onClick={() => handleMenuClick("Menu 4")}>Menu 4</button>
        </aside>
        <main className="main">
            {contentComponents[selectedMenu]}
        </main>
      </div>
    </div>
  );
}

export default MyPage;
