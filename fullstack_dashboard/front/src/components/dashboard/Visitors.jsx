import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchVisitors } from '../../redux/slices/apiSlice';
import HeadTitle from './HeadTitle'

const Visitors = () => {

const dispatch = useDispatch();
const state = useSelector((state) => state.apis.visitorsData);

useEffect(() => {
  dispatch(fetchVisitors());
}, [dispatch]);

console.log(state)

  return (
        <div className='block-wrap'>
      <HeadTitle title="Visitors Insights" />
    </div>
  )
}

export default Visitors;