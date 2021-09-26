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
        <small>&copy; 2021 progL</small>
      </footer>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: grid;
  grid-template:
    'header header header' min-content
    'main main main' 1fr
    'footer footer footer' min-content
    / 1fr;
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #c1e1e1;
  .header {
    grid-area: header;
  }
  .main {
    grid-area: main;
  }
  .footer {
    grid-area: footer;
    padding: 12px;
    text-align: center;
  }
`;
