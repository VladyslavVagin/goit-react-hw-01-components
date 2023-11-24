import Profile from './Profile/Profile';
import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      {Profile(user)}
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      {FriendList(friends)}
      {TransactionHistory(transactions)}
    </>
  );
};
