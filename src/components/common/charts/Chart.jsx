import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import EmptyDataFields from '../../EmptyDataFields/EmptyDataFields';

const ApexChart = ({ subjectGraphData }) => {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      id: 'quiz-marks-chart',
      type: 'line',
      background: '#ffffff',
    },
    xaxis: {
      categories: [],
    },
    yaxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Marks',
      },
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    colors: ['#5F2C6C'],
  });

  useEffect(() => {
    if (subjectGraphData) {
      const categories = subjectGraphData.result.map((item) => item.name);
      const data = subjectGraphData.result.map((item) => item.obtained);

      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories,
        },
        yaxis: {
          ...prevOptions.yaxis,
          max: subjectGraphData.maxNumber || 100,
        },
      }));

      setSeries([{ name: 'Marks Obtained', data }]);
    }
  }, [subjectGraphData]);

  return (
    <>
      {series.length > 0 ? (
        <div className="bg-white rounded-md shadow-md">
          <div className="bg-[#f8f8f8] px-8 rounded  py-4">
            <h1 className="text-[18px] font-medium">Your Progress</h1>
          </div>
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={330}
          />
        </div>
      ) : (
        <EmptyDataFields title={'Subjects'} message={'No data found'} />
      )}
    </>
  );
};

export default ApexChart;
