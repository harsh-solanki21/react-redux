import React, { ComponentType } from "react";

const Layout = <T extends object>(
  PageComponent: ComponentType<T>
): React.FC<T> => {
  const WithPage: React.FC<T> = ({ ...props }) => (
    <>
      <header>Some Header Content</header>

      <PageComponent {...props} />

      <footer>Some Footer Content</footer>
    </>
  );

  return WithPage;
};

export default Layout;
