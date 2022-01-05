import React from "react";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => (
  <div className="app__container">{children}</div>
);

export default AppWrapper;
