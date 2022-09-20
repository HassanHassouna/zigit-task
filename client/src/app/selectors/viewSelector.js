const getView = (state) => state.viewSlice

export const getIsLoading = (state) => getView(state).isLoading
