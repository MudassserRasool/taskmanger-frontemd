import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import EmptyDataFields from '../../EmptyDataFields/EmptyDataFields';

const BarChart = ({ barGraphData }) => {
  const [chartData, setChartData] = useState();
  useEffect(() => {
    setChartData({
      series: barGraphData?.series,
      options: {
        chart: {
          type: 'bar',
          height: 350,
        },
        legend: {
          show: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '40%',
            endingShape: 'rounded',
          },
        },
        colors: ['#006c8d', '#B731D2', '#007352'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: barGraphData?.option.xaxis.categories,
        },

        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands';
            },
          },
        },
      },
    });
  }, [barGraphData]);

  return (
    <>
      {chartData?.series?.length > 0 ? (
        <>
          <div className="shadow-md">
            <div className="bg-[#f8f8f8] px-4 rounded py-4 ">
              <h1 className="text-[18px] px-4 font-medium">Your Progress</h1>
            </div>
            <div id="chart" className="bg-[#ffffff] rounded-md px-4 py-2">
              <div className="border border-1 border-[#696969] border-opacity-40 mx-6 my-6 px-4 py-2 rounded-xl bg-white">
                <ReactApexChart
                  options={{
                    ...chartData.options,
                    chart: {
                      ...chartData.options.chart,
                      toolbar: {
                        show: false,
                      },
                    },
                    yaxis: {
                      ...chartData.options.yaxis,
                      axisBorder: {
                        show: true,
                        color: '#efefef',
                        width: 1,
                      },
                    },
                  }}
                  series={chartData.series}
                  type="bar"
                  height={280}
                />
              </div>
            </div>
          </div>
          <div id="html-dist"></div>
        </>
      ) : (
        <EmptyDataFields title="Subject" message="Data does not exist" />
      )}
    </>
  );
};

export default BarChart;
