import Profile from './Profile/Profile';
import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {Profile(user)}
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      {FriendList(friends)}
    </div>
  );
};
