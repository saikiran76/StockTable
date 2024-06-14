import { Line } from 'react-chartjs-2';

const ChartSection = ({ data }) => {
  return (
    <section className="p-4 bg-gray-700 text-white">
      <h2>Market Chart</h2>
      <Line data={data} />
    </section>
  );
};

export default ChartSection;
