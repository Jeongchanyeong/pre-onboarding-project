import styled from 'styled-components';
import { useState } from 'react';
/*
Add와 Delete 기능 2 가지를 만듭니다.

input 창에 list1을 입력 후 Add 버튼을 누르면 input 창 하단에 list1 컴포넌트가 뜹니다.
각 list의 delete 버튼을 누르면 해당 list 컴포넌트가 삭제됩니다.


디자인은 자유롭게 해도 됩니다. 위의 2가지 버튼과 그에 따른 기능이 있으면 됩니다.
가능하면 컴포넌트를 만듭니다. (작은 단위라도 좋습니다.)
전역상태를 관리해주세요.(가능한 Redux나 Redux-toolkit을 이용해주세요.) 
*/

/* 
1. 입력한 것들 감지
1-1) 


2. 입력한 것이 CreateButton을 눌렀을 때(onClick) create되어야 함
3. 따로 생성되는 컴포넌트를 만들어서 분리해야겠다.
4. 최상위 컴포넌트에서 onCreate함수를 제작하여 useState()로 상태를 관리하자
5. ListPage에서는 상태관리함수를, Item에는 초깃값을 전달한다.

*/

const Wrapper = styled.div`
  margin-top: 200px;
`;

const InputBox = styled.input`
  width: 300px;
  padding: 15px;
  border: 2px gray solid;
  border-radius: 10px;
`;
const CreateButton = styled.button`
  margin-left: 20px;
  padding: 15px;
  border: 2px gray solid;
  border-radius: 10px;

  cursor: pointer;
`;

interface ListProps {
  onCreate: (content: string) => void;
}

const List: React.FC<ListProps> = ({ onCreate }) => {
  const [state, setState] = useState('');

  const handleChangeValue = (e: any) => {
    setState(e.target.value);
  };

  const handleSubmit = () => {
    onCreate(state);

    setState('');
  };

  return (
    <Wrapper>
      <InputBox value={state} onChange={handleChangeValue}></InputBox>
      <CreateButton onClick={handleSubmit}>추가</CreateButton>
    </Wrapper>
  );
};

export default List;
