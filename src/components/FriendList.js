import Friends from "./Friend";

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
export default FriendsList;
