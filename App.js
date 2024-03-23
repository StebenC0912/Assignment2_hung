import MealNavigation from "./src/navigation/MealNavigation";
import { Provider } from "react-redux";
import { createStore , combineReducers } from "redux";
import mealReducer from "./src/store/reducers/Meals";
const rootReducer = combineReducers({
  meals: mealReducer,
});
const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <MealNavigation />
    </Provider>
  );
}
