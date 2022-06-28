import styled from 'styled-components';

export const Container = styled.button`
  background: ${props => props.theme.colors.secondary};
  height: 56px;
  border-radius: 8px;
  border: 0;
  padding: 0 16px;
  color: ${({theme}) => theme.colors.text};
  width: 100%;
  font-weight: ${({theme}) => theme.fonts.medium};
  margin-top: 16px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
  }
`;
