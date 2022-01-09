import { toggle } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const dispatch = useDispatch();
  const toggleReducer = useSelector((state) => state.toggleReducer);

  return (
    <>
      <h2>Toggle</h2>
      {toggleReducer === true ? (
        <button onClick={() => dispatch(toggle())}>true</button>
      ) : (
        <button onClick={() => dispatch(toggle())}>false</button>
      )}
      {toggleReducer === true && <h3>This message will only show if toggle is "true"</h3>}
    </>
  );
}

export default Counter;
