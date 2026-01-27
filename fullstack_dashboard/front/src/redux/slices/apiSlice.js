import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_VISITORS_API_URL, GET_REVENUE_API_URL } from '../../constants/apiUrls';
import { getRequest } from '../../constants/requestMethods';

// 공통된 비동기 액션 생성 로직을 별도의 함수로 분리
const createFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async () => {
    return await getRequest(apiUrl);
  })
};

export const fetchVisitors = createFetchThunk('fetchVisitors', GET_VISITORS_API_URL);
export const fetchRevenue = createFetchThunk('fetchTotalRevenue', GET_REVENUE_API_URL);


// 공통 부분
const handleFulfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload;
};
const handlerejected = (state, action) => {
  console.log('Error', action.payload);
  state.isError = true;
};


// 추가 부분
const apisSlice = createSlice({
  name: 'apis',
  initialState: {
    visitorsData: null,
    revenueData: null,
    isError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchVisitors.fulfilled, handleFulfilled('visitorsData'))
    .addCase(fetchVisitors.rejected, handlerejected) 
    .addCase(fetchRevenue.fulfilled, handleFulfilled('revenueData'))
    .addCase(fetchRevenue.rejected, handlerejected)
  }
});

export default apisSlice.reducer;