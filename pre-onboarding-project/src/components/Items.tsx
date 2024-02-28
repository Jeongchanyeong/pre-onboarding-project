import styled from 'styled-components';
import Item from './Item';

interface dummyListProps {
  dummyList: any;
  onDelete: any;
}
const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  margin-top: 100px;
`;

const Items: React.FC<dummyListProps> = ({ onDelete, dummyList }) => {
  return (
    <Wrapper>
      {dummyList.map((it: any) => (
        <Item key={it.id} {...it} onDelete={onDelete} />
      ))}
    </Wrapper>
  );
};

export default Items;
