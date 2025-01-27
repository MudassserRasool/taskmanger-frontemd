import PropTypes from 'prop-types';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ data = [], colors, heading, xAxis = [], maxTime }) => {
  const defaultSeries = [
    {
      name: 'Default Series',
      data: [],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5],
    },
    colors: colors,
    title: {
      text: '',
      align: 'left',
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          ' - <strong>' +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          '</strong>'
        );
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: xAxis,
    },
    yaxis: {
      max: maxTime,
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + ' (mins)';
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + ' per session';
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: '#f1f1f1',
    },
  };

  return (
    <>
      {/* {data.length || defaultSeries.length ? ( */}
      <div className="bg-white rounded-md shadow-md max-h-[422px] ">
        <div className="bg-[#f8f8f8] px-4 rounded-md py-4">
          <h1 className="text-[18px] px-4 font-medium">{heading}</h1>
        </div>
        <ReactApexChart
          options={options}
          series={data || defaultSeries}
          type="line"
          height={350}
        />
      </div>
      {/* ) : ( */}
      {/* <EmptyDataFields title={'Time Spent'} message={'No data found'} /> */}
      {/* )} */}
    </>
  );
};

LineChart.propTypes = {
  series: PropTypes.array.isRequired,
  colors: PropTypes.array,
};

LineChart.defaultProps = {
  series: [],
  colors: ['#008FFB', '#00E396', '#FEB019'],
};

export default LineChart;
