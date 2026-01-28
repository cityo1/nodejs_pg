const domain = 'http://localhost:8000';

const REST_COUNTRIES_API_URL =
  'https://restcountries.com/v3.1/all?fields=name,flags,languages';

const GET_VISITORS_API_URL = `${domain}/visitors`;
const GET_REVENUE_API_URL = `${domain}/revenue`;
const GET_CUSTOMER_API_URL = `${domain}/customers`;
const GET_TARGET_REALITY_API_URL = `${domain}/target_reality`;
const GET_TOP_PRODUCT_API_URL = `${domain}/top_product`;

export { GET_VISITORS_API_URL, GET_REVENUE_API_URL, GET_CUSTOMER_API_URL, GET_TARGET_REALITY_API_URL, GET_TOP_PRODUCT_API_URL, REST_COUNTRIES_API_URL };