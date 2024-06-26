function Friends({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="friend" />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance < 0 ? "red" : friend.balance > 0 ? "green" : ""
        }
      >
        {friend.balance < 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)}€`
          : friend.balance === 0
          ? `You and ${friend.name} are even`
          : `${friend.name} owes you ${friend.balance}€`}
      </p>
      <button className="button" onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}
export default Friends;
