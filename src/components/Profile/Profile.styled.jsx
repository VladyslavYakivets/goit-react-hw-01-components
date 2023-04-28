import styled from 'styled-components'

export const ProfileStyled = styled.div`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    background-color: lavender;
    border-radius: 10px;
`;

export const Description = styled.div`
    padding: 40px;
    text-align: center;
`;

export const Avatar = styled.img`
    display: block;
    width: 100px;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 50%;
`;

export const UserName = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const UserTag = styled.p`
    font-size: 16px;
    color: grey;
    margin-bottom: 10px;
`;

export const UserLocation = styled.p`
    font-size: 16px;
    color: grey;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;

`;

export const StatsItem = styled.li`
  display: flex;
  width: calc(100% / 3);
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Label = styled.span`
    color: grey;
`;

export const Quantity = styled.span`
    font-weight: 700;
`;

