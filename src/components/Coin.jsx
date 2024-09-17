import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const Coin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API CoinGecko
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'
        );
        const result = await response.json();

        const chartData = result.prices.map((price) => [
          new Date(price[0]),
          price[1],
        ]);

        // Configurando dados para o Google Charts
        setData([
          ['Data', 'Preço (USD)'],
          ...chartData,
        ]);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ margin: 'auto', width: '80%', textAlign: 'center' }}>
      <h2>Preço do Bitcoin (Últimos 7 dias)</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={{
            title: 'Preço do Bitcoin',
            curveType: 'function',
            legend: { position: 'bottom' },
            hAxis: { format: 'MMM d' },
            vAxis: { title: 'Preço (USD)' },
          }}
        />
      )}
    </div>
  );
};

export default Coin;
