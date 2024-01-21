import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
  name: 'info',
  initialState: {
    projectInfo: 'aboutme',
  },
  reducers: {
    selectProject(state, action) {
      state.projectInfo = action.payload;
    },
  },
});

export const { selectProject } = infoSlice.actions;
export default infoSlice.reducer;
