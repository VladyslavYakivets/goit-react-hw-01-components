import {FriendItem, StatusIsOnline, Avatar, Name} from './FriendListItem.styled'

export const FriendListItem = ({
    avatar,
    name,
    isOnline,
    id
}) => {
    return (
        <FriendItem key={id}>
  <StatusIsOnline isOnline={isOnline}></StatusIsOnline>
  <Avatar src={avatar} alt="User avatar" width="48" />
  <Name>{name}</Name>
      </FriendItem>
    )
}