import PropTypes from 'prop-types';
import {Table, Thead, TableHeader, TableRow, TableInfo} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => (
    <Table>
  <Thead>
    <tr>
      <TableHeader>Type</TableHeader>
      <TableHeader>Amount</TableHeader>
      <TableHeader>Currency</TableHeader>
    </tr>
  </Thead>

  <tbody>
    {items.map(({ id, type, amount, currency}) => (
        <TableRow key={id}>
            <TableInfo>{type}</TableInfo>
            <TableInfo>{amount}</TableInfo>
            <TableInfo>{currency}</TableInfo>
        </TableRow>
    )
    )}
  </tbody>
</Table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };