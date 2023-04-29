import styled from 'styled-components'

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px, rgba(0, 0, 0, 0.22) 0px 5px 5px;

    &:not(:last-child){
        margin-bottom: 10px;
    }
`;

export const StatusIsOnline = styled.span`
width: 10px;
height: 10px;
background-color: ${({ isOnline }) => { 
    return isOnline? 'green' : 'red'}};
border-radius: 50%;
margin-left: 10px;
margin-right: 10px;
`;

export const Avatar = styled.img`
    
`;

export const Name = styled.p`
    margin-left: 10px;
    font-size: 20px;
`