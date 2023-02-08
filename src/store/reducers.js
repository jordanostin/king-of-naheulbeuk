import {combineReducers} from "redux";
import enemySlice from "./slices/enemy/enemySlice";
import levelSlice from "./slices/level/levelSlice";
import userSlice from "./slices/user/userSlice";

//import reducer from 'chemin/reducer'

const rootReducer = combineReducers({
    user: userSlice,
    level: levelSlice,
    enemy: enemySlice
})


export default rootReducer