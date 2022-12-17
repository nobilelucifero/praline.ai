// from https://github.com/fernandodof/simple-react-tabs
import React, { useCallback } from "react";
import { useState } from "react";

// TabTitle
export const TabTitle = ({
  //   className,
  title,
  setSelectedTab,
  index,
  isActive,
}) => {
  const handleOnClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li
      className={`
      font-bold ${
        isActive
          ? "text-gray-900 fill-gray-900 stroke-gray-900"
          : "text-gray-300 fill-gray-300 stroke-gray-300"
      }`}
    >
      <button className="block" onClick={handleOnClick}>
        {title}
      </button>
    </li>
  );
};

// TabPane
export const TabPane = ({ children }) => <div>{children}</div>;

// Tabs
export const Tabs = ({ children, preSelectedTabIndex }) => {
  // First tab is shown by default
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    preSelectedTabIndex || 0
  );

  return (
    <div
      className="
        flex
        flex-row
        items-center
        rounded-xl
        border
        border-gray-300
        p-2
        "
    >
      <ul
        className="
        flex
        flex-row
        gap-4
        ml-2
      "
      >
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
