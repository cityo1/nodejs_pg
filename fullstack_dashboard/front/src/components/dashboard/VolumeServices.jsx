import React from 'react';
import HeadTitle from './HeadTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolumeServices } from '../../redux/slices/apiSlice';
import { useEffect } from 'react';
import { BarChart, Bar, Legend, ResponsiveContainer } from 'recharts';

const VolumeServices = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.volumeServicesData);

  useEffect(() => {
    dispatch(fetchVolumeServices());
  }, [dispatch]);

  // console.log(state);

  const formatLegendValue = (value, name) => {
    const initialValue = 0;
    const totalValue = state?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue[name.dataKey];
    }, initialValue);

    return (
      <span className="custom-legend-item-text-group">
        <span className="custom-legend-item-text">{value}</span>
        <span>{' ' + totalValue}</span>
      </span>
    );
  };

  return (
    <div className="block-wrap ml-[14px] my-[14px]">
      <HeadTitle title="Volume vs Services Level" />
      <div className="w-full h-[250px] mb-5">
        <ResponsiveContainer>
          <BarChart
            data={state}
            margin={{
              top: 5,
              right: 5,
              left: 5,
            }}
          >
            <Legend
              iconType="circle"
              iconSize={10}
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#0095ff"
              radius={[0, 0, 4, 4]}
              barSize={16}
            />
            <Bar
              dataKey="services"
              stackId="a"
              fill="#00e096"
              radius={[4, 4, 0, 0]}
              barSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VolumeServices;
