import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_VISITORS_API_URL, GET_REVENUE_API_URL, GET_CUSTOMER_API_URL, GET_TARGET_REALITY_API_URL, GET_TOP_PRODUCT_API_URL } from '../../constants/apiUrls';
import { getRequest } from '../../constants/requestMethods';

// 공통된 비동기 액션 생성 로직을 별도의 함수로 분리
const createFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async () => {
    return await getRequest(apiUrl);
  })
};

export const fetchVisitors = createFetchThunk('fetchVisitors', GET_VISITORS_API_URL);
export const fetchRevenue = createFetchThunk('fetchRevenue', GET_REVENUE_API_URL);
export const fetchCustomer = createFetchThunk('fetchCustomer', GET_CUSTOMER_API_URL);
export const fetchTargetReality = createFetchThunk('fetchTargetReality', GET_TARGET_REALITY_API_URL);
export const fetchTopProduct = createFetchThunk('fetchTopProduct', GET_TOP_PRODUCT_API_URL);

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
    customerData: null,
    targetRealityData: null,
    topProductData: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchVisitors.fulfilled, handleFulfilled('visitorsData'))
    .addCase(fetchVisitors.rejected, handlerejected) 
    .addCase(fetchRevenue.fulfilled, handleFulfilled('revenueData'))
    .addCase(fetchRevenue.rejected, handlerejected)
    .addCase(fetchCustomer.fulfilled, handleFulfilled('customerData'))
    .addCase(fetchCustomer.rejected, handlerejected)
    .addCase(fetchTargetReality.fulfilled, handleFulfilled('targetRealityData'))
    .addCase(fetchTargetReality.rejected, handlerejected)
    .addCase(fetchTopProduct.fulfilled, handleFulfilled('topProductData'))
    .addCase(fetchTopProduct.rejected, handlerejected)
  }
});

export default apisSlice.reducer;