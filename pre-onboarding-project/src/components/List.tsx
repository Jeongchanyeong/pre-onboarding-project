import styled from 'styled-components';

/*
Add와 Delete 기능 2 가지를 만듭니다.

input 창에 list1을 입력 후 Add 버튼을 누르면 input 창 하단에 list1 컴포넌트가 뜹니다.
각 list의 delete 버튼을 누르면 해당 list 컴포넌트가 삭제됩니다.


디자인은 자유롭게 해도 됩니다. 위의 2가지 버튼과 그에 따른 기능이 있으면 됩니다.
가능하면 컴포넌트를 만듭니다. (작은 단위라도 좋습니다.)
전역상태를 관리해주세요.(가능한 Redux나 Redux-toolkit을 이용해주세요.) 
*/

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60vw;
  height: 100vh;

  background-color: #b6b6b6;
`;

const WrapperBox = styled.div``;

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

const List = () => {
  return (
    <Wrapper>
      <WrapperBox>
        <InputBox placeholder="뭐라적을래"></InputBox>
        <CreateButton>Add</CreateButton>
      </WrapperBox>
    </Wrapper>
  );
};

export default List;
