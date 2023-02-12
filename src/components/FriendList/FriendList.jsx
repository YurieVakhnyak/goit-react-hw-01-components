import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className="friend-item" key={id}>
          {isOnline ? (
            <span className="status is-online"></span>
          ) : (
            <span className="status is-offline"></span>
          )}

          <img
            className="friend-avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  transactions: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

// 'https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/119813891_1664198157101896_2936542534722828577_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vdCvFJQQLNoAX89OATp&_nc_ht=scontent-iev1-1.xx&oh=00_AfCGiuiHy3lYw5jd9cszWQh-27ult2aEEZKMgyMjDc_vFw&oe=64107F73';
