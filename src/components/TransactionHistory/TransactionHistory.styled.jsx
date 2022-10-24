import styled from '@emotion/styled';

export const Table = styled.table`
  display: grid;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgb(88, 88, 88);
  width: max-content;
  margin: 25px auto 0 auto;
`;

export const TableHead = styled.thead`
  tr {
    display: grid;
    grid-template-columns: 250px 250px 250px;
    background-color: rgb(0, 68, 228);
    text-transform: uppercase;
    color: rgb(200, 207, 255);
  }
`;

export const TableBody = styled.tbody`
  tr {
    display: grid;
    grid-template-columns: 250px 250px 250px;
  }
`;

export const TableTh = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    height: 30px;
    border-right: 1px solid rgba(0, 156, 156, 0.5);
}
`;

export const TableTd = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    text-transform: capitalize;
    }

  &:not(:last-child) {
   height: 30px;
   border-right: 1px solid rgba(0, 156, 156, 0.5);
}
`;