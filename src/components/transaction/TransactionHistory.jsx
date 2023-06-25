import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th className={style.tableHeader}>Type</th>
          <th className={style.tableHeader}>Amount</th>
          <th className={style.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={style.tableRow}>
              <td className={style.tableCell}>{type}</td>
              <td className={style.tableCell}>{amount}</td>
              <td className={style.tableCell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    )
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};