import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';
import { API_KEY_VANTAGE } from '../utils/constants';
import { MdChevronRight } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Loader } from './Loader';
import { useMediaQuery } from 'react-responsive';

const ScatterPlot = ({nav}) => {
  const [data, setData] = useState({});
  const [timeRange, setTimeRange] = useState('1D');
  const [loading, setLoading] = useState(true);

  const { symbol } = useSelector((state) => state.stock);

  const fetchData = async (symbol, interval, outputsize = 'compact') => {
    try {
        setLoading(true);
        const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_${interval}&symbol=${symbol}&outputsize=${outputsize}&apikey=${API_KEY_VANTAGE}`;
        const response = await axios.get(URL);
        const data = response.data;
        let timeSeriesKey = Object.keys(data).find(key => key.includes('Time Series'));

        if (!timeSeriesKey) {
            throw new Error('Invalid response from API');
        }

        setData(data[timeSeriesKey]);
        } catch (e) {
        console.error(e);
        } finally{
            setLoading(false);
        }
  };

  useEffect(() => {
    let interval = '';
    let outputsize = 'compact';

    switch (timeRange) {
      case '1D':
        interval = 'INTRADAY&interval=5min';
        break;
      case '1W':
        interval = 'INTRADAY&interval=30min';
        break;
      case '1M':
        interval = 'DAILY';
        break;
      case '3M':
        interval = 'DAILY';
        outputsize = 'full';
        break;
      case '1Y':
        interval = 'WEEKLY';
        break;
      case 'All':
        interval = 'MONTHLY';
        break;
      default:
        interval = 'INTRADAY&interval=5min';
    }

    fetchData(symbol, interval, outputsize);
    // setLoading(false)
  }, [timeRange, symbol]);

  const dates = data ? Object.keys(data) : [];
  const closingPrices = dates.map(date => parseFloat(data[date]['4. close'] || 0));

  const isLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const chartDimensions = {
    width: isLaptop ? 400 : isTablet ? 350 : 296,
    height: isLaptop ? 300 : isTablet ? 275 : 250,
  };

  return (
    <div className="rounded-md bg-[#0F0F14] text-white p-4 m-4 font-poppin">
      <h1 className="mt-[1em] ml-1 text-gray-600 flex gap-2 items-center">
        {`${symbol} (${timeRange})`}<MdChevronRight style={{ color: "white" }} />
      </h1>
      {loading ? <div className='mx-auto mt-[6em]'><Loader/></div> :
      <Plot
        data={[
          {
            x: dates,
            y: closingPrices,
            type: 'scatter',
            mode: 'markers',
            marker: { color: '#1f77b4' },
          },
        ]}
        layout={{
          width: chartDimensions.width,
          height: chartDimensions.height,
          paper_bgcolor: '#0F0F14',
          plot_bgcolor: '#0F0F14',
          xaxis: {
            gridcolor: '#0F0F14',
            zerolinecolor: '#0F0F14',
            color: 'white',
          },
          yaxis: {
            gridcolor: '#0F0F14',
            zerolinecolor: '#444',
            color: 'white',
          },
          margin: {
            l: 40,
            r: 30,
            b: 30,
            t: 30,
          },
          showlegend: false,
        }}
        config={{ displayModeBar: false }}
      />
        }
      <div className="flex space-x-1 md:space-x-2  mb-4 ">
        {['1D', '1W', '1M', '3M', '1Y', 'All'].map(range => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`${nav ? "px-2 py-1 md:px-2 md:py-2" : "px-3 py-2"} rounded-md mt-3 ${timeRange === range ? 'bg-blue-600' : 'bg-gray-600'}`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScatterPlot;
