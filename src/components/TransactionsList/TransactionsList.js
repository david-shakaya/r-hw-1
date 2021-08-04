import TransactionsListItem from "../TransactionsListItem/TransactionsListItem";
import PropTypes from "prop-types";

const TransactionsList = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <TransactionsListItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
      })}
    </table>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionsList;
