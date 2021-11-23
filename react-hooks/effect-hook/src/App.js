import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import DataFetching from './components/dataFetching/DataFetching';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import HookMouseContainer from './components/HookMouseContainer';
import IntervalClassCounter from './components/Interval/IntervalClassCounter';
import IntervalHookCounter from './components/Interval/IntervalHookCounter';
const App = () => {
  return (
    <div className='App'>
      Effect hook
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <HookMouseContainer /> */}
      {/* ****************************************** */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      {/* ****************************************** */}
      <DataFetching />
    </div>
  );
};

export default App;
