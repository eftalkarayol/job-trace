import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainJobs: [],
  jobs: [],
  initialized: false,
  isError: false,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.mainJobs = action.payload;
      state.initialized = true;
      state.isError = false;
    },
    setError: (state) => {
      state.isError = true;
      state.initialized = true;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    filterBySearch: (state, action) => {
      const query = action.payload.toLowerCase();

      const filter = state.mainJobs.filter((job) =>
        job.company.toLowerCase().includes(query)
      );
      state.jobs = filter;
    },
    filterByStatus: (state, action) => {
      const query = action.payload;

      const filter = state.mainJobs.filter((job) => job.status === query);
      state.jobs = filter;
    },
    filterByType: (state, action) => {
      const query = action.payload;

      const filter = state.mainJobs.filter((job) => job.type === query);
      state.jobs = filter;
    },
    sortJobs: (state, action) => {
      const query = action.payload;
      switch (query) {
        case "A-Z":
          state.jobs.sort((a, b) => a.company.localeCompare(b.company));
          break;
        case "Z-A":
          state.jobs.sort((a, b) => b.company.localeCompare(a.company));
          break;
        case "Yeni":
          state.jobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case "Eski":
          state.jobs.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
        default:
          break;
      }
    },
    clearFilters: (state) => {
      state.jobs = state.mainJobs;
    },
  },
});

export const {
  setJobs,
  setError,
  addJob,
  filterBySearch,
  filterByStatus,
  filterByType,
  sortJobs,
  clearFilters,
} = jobSlice.actions;

export default jobSlice.reducer;
