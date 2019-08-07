import { createBottomTabNavigator } from 'react-navigation';
import TodoStack from './TodoStack';
import CompleteStack from './CompleteStack';
import ActiveStack from './ActiveStack';



const tabNavigator = createBottomTabNavigator(
  {
    TodoStack,
    ActiveStack,
    CompleteStack,
  },
  {
  }
);
export default tabNavigator;
