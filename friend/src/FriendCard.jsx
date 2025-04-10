function FriendCard(props) {
  return (
    <div style={{
      border: '2px solid #ccc',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px',
      background: '#f9f9f9',
      maxWidth: '300px'
    }}>
      <h2>{props.name}</h2>
      <p><strong>City:</strong> {props.city}</p>
      <p><strong>Message:</strong> {props.message}</p>
    </div>
  );
}

export default FriendCard;
