import React, { useCallback } from "react";
import { useState } from "react";

// TabTitle
const TabTitle = ({ title, setSelectedTab, index, isActive }) => {
  const handleOnClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li className={`${styles.title} ${isActive ? "active" : ""}`}>
      <button onClick={handleOnClick}>{title}</button>
    </li>
  );
};

// TabPane
const TabPane = ({ children }) => <div>{children}</div>;

// Tabs
const Tabs = ({ children, preSelectedTabIndex }) => {
  // First tab is shown by default
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    preSelectedTabIndex || 0
  );

  return (
    <div className={styles.tabs}>
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </ul>

      {/* show selcted tab by index*/}
      {children[selectedTabIndex]}
    </div>
  );
};
// export default Tabs;
