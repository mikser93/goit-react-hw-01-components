import styled from '@emotion/styled';

export const Section = styled.section`
  width: 500px;
  margin: 0 auto 40px auto;
  padding: 0;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;

  background-color: rgb(230, 230, 230);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  padding: 10px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  background-color: rgb(188, 238, 157);

  &:nth-child(2n) {
    background-color: rgb(130, 221, 122);
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 18px;
`;
