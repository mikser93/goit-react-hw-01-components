import PropTypes from 'prop-types';
import { Table, TableHead, TableBody, TableTh, TableTd} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </tr>
      </TableHead>
      <TableBody>
        {items.map(item => (
          <tr key={item.id}>
            <TableTd>{item.type}</TableTd>
            <TableTd>{item.amount}</TableTd>
            <TableTd>{item.currency}</TableTd>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
