import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommandHistoryEntry {
  original: string;
  optimized: string;
  date: string;
}

interface CommandsState {
  history: CommandHistoryEntry[];
}

const initialState: CommandsState = {
  history: [],
};

const commandsSlice = createSlice({
  name: "commands",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<CommandHistoryEntry>) => {
      state.history.push(action.payload);
    },
  },
});

export const { addToHistory } = commandsSlice.actions;
export default commandsSlice.reducer;
