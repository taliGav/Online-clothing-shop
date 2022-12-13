import styleld from 'styled-components';

export const CategoryContainer = styleld.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const CategoryTitle = styleld.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;