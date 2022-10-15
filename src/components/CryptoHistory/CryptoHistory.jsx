import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { format } from 'date-fns';


export const CryptoHistory = ({items}) => {
  return <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

  <tbody>
    {items.map(({id, price, amount, date}, idx) => {
      return <Tr key={id}>
      <Td>{idx+1}</Td>
      <Td>{price}</Td>
      <Td>{amount}</Td>
      <Td>{format(new Date(date), 'Pp', { addSuffix: true })}</Td>
    </Tr>
    })}
  </tbody>
</BaseTable>
};
