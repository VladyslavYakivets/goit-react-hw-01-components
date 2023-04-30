import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Section = styled.section`
  width: 300px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  padding: 20px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  align-items: center;
  gap: 10px;
  padding: 10px;

  &:first-child {
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-bottom-right-radius: 10px;
  }

  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  color: white;
`;

export const Percentage = styled.span`
  color: white;
`;
