import { combineReducers } from "redux"
import viewSlice from "./viewReducers"
import userSlice from "./userReducers"
import projectsSlice from "./projectsReducers"
import commentsSlice from "./commentsReducers"
const allReducers = combineReducers({
  viewSlice,
  userSlice,
  projectsSlice,
  commentsSlice
})
export default allReducers
