import Profile from './Profile/Profile';
import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Wrapper from './Wrapper/Wrapper';

export const App = () => {
  return (
    <>
        <Wrapper>
          {Profile(user)}
          <Statistics title="Upload stats" stats={data} />
          {/* <Statistics stats={data} /> */}
        </Wrapper>
        {FriendList(friends)}
        {TransactionHistory(transactions)}
    </>
  );
};
