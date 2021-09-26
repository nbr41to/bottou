import { VFC } from 'react';
import styled from 'styled-components';

type CreateBottouProps = {
  className?: string;
};

export const CreateBottou: VFC<CreateBottouProps> = ({ className }) => {
  return (
    <StyledCreateBottou className={`${className}`}>
      <h1>Create new habit</h1>
    </StyledCreateBottou>
  );
};

const StyledCreateBottou = styled.div`
  ${({ theme }) => theme.mixins.box};
`;
