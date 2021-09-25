import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import { VFC } from 'react';
import styled from 'styled-components';

import { Header } from './Header';

type LayoutProps = {
  className?: string;
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ className, children }) => {
  return (
    <StyledLayout className={`${className}`}>
      <Header className="header" />
      <main className="main">{children}</main>
      <footer className="footer">
        <small>copyright &copy; 2021 progL</small>
      </footer>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: grid;
  grid-template:
    'header header header' 1fr
    'main main main' 1fr
    'footer footer footer' 1fr
    / 1fr;
  height: 100vh;
  background-color: peachpuff;

  .header {
    grid-area: header;
  }
  .main {
    grid-area: main;
    height: 1200px;
  }
  .footer {
    grid-area: footer;
    padding: 12px;
    text-align: center;
  }
`;
