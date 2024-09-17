import { Chart } from 'react-google-charts';

const Coin2 = () => {


  return (
    <div style={{ margin: 'auto', width: '80%', textAlign: 'center' }}>
      <h2>Preço do Bitcoin (DADOS FICTICIOS)</h2>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={[
            ['Data', 'Preço (USD)'],
            [new Date(2000, 8, 1), 50000],
            [new Date(2000, 8, 5), 30000],
            [new Date(2000, 8, 9), 92000],
            [new Date(2000, 9, 2), 10000]
          ]}
          options={{
            title: 'Preço do Bitcoin',
            curveType: 'function',
            legend: { position: 'bottom' },
            hAxis: { format: 'MMM d' },
            vAxis: { title: 'Preço (USD)' },
          }}
        />
    </div>
  );
};

export default Coin2;
