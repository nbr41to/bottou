import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import { VFC } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  className?: string;
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ className, children }) => {
  return (
    <StyledLayout className={`${className}`}>
      <header>
        <h1>Bottou</h1>
      </header>
      <main>{children}</main>
      <footer>
        <small>copyright &copy; 2021 progL</small>
      </footer>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  height: 100vh;
  background-color: peachpuff;
`;
