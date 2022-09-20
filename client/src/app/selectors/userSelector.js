const getUserState = (state) => state.userSlice

export const getUserToken = (state) => getUserState(state).token
