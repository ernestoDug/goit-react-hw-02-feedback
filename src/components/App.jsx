// import ReactDOM from 'react-dom/client';
// npm install prop-types;

import React from 'react';

// // кОмпО
// import Profile from 'components/Profile/Profile';
// import Statistics from 'components/Statistics/Statistics';
import Feedback from 'components/Feedback/Feedback';
// import TransactionHistory from 'components/TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
<Feedback/>


      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
 
      /> */}
      {/* <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} /> */}
    </div>
  );
};
