import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className="thread">
        <tr>
          <th className="type-col">Type</th>
          <th className="amount-col">Amount</th>
          <th className="currency-col">Currency</th>
        </tr>
      </thead>

      <tbody className="table-body">
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className="row">
            <td className="type-col">{type}</td>
            <td className="amount-col">{amount}</td>
            <td className="currency-col">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
