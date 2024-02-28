import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import List from './components/List';
import Items from './components/Items';

import { useReducer, useRef } from 'react';

const GlobalStyle = createGlobalStyle`

${reset}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #3c3c3c;
}

`;

const reducer = (
  state: any,
  action: { type: any; data: any; targetId: any }
) => {
  switch (action.type) {
    case 'CREATE': {
      const newItems = {
        ...action.data,
      };
      return [newItems, ...state];
    }

    case 'DELETE': {
      return state.filter((it: any) => it.id !== action.targetId);
    }

    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const onCreate = (content: string) => {
    dispatch({
      type: 'CREATE',
      data: { content, id: dataId.current },
      targetId: undefined,
    });
    dataId.current += 1;
  };

  const onDelete = (targetId: any) => {
    dispatch({
      type: 'DELETE',
      targetId,
      data: undefined,
    });
  };
  return (
    <>
      <GlobalStyle />
      <List onCreate={onCreate} />
      <Items onDelete={onDelete} dummyList={data} />
    </>
  );
}

export default App;
