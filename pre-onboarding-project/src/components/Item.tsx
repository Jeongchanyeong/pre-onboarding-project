import styled from 'styled-components';

const WrapperBox = styled.div`
  display: flex;

  margin-top: 10px;
`;

const DeleteButton = styled.button`
  margin-left: 20px;
  padding: 15px;
  border: 1px red solid;
  border-radius: 10px;

  color: white;
  background-color: #ff4747;

  cursor: pointer;
`;
const Div = styled.div`
  width: 300px;
  padding: 15px;

  border-radius: 10px;
  color: #2d2d2d;
  background-color: #ffb6b6;
`;

interface dummyListProps {
  id: number;
  content: string;
  onDelete: any;
}

const Item: React.FC<dummyListProps> = ({ id, content, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <WrapperBox>
      <Div>{content}</Div>
      <DeleteButton onClick={handleClick}>삭제</DeleteButton>
    </WrapperBox>
  );
};

export default Item;
