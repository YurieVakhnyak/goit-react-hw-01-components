import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

import '../index.css';
import { Profile } from '../components/Profile/Profile.jsx';
import { Statistics } from '../components/Statistics/Statistics.jsx';
import { FriendList } from '../components/FriendList/FriendList.jsx';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <div className="thumb">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Uploads stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
