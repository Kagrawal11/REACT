import FriendCard from './FriendCard';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>👬 My Friends</h1>

      <FriendCard 
        name="Amit Bhai"
        city="Delhi"
        message="Coding is life 🔥"
      />

      <FriendCard 
        name="Ravi Bhai"
        city="Mumbai"
        message="React sikh raha hoon 😎"
      />

      <FriendCard 
        name="Sunny Bhai"
        city="Chandigarh"
        message="Chai peelo sab log ☕"
      />
    </div>
  );
}

export default App;
