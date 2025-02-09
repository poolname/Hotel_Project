import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const options = {
  responsive: true,
  plugins: {
    datalabels: {
      formatter: (value, context) => {
        return context.chart.data.labels[context.dataIndex];
      },
      color: '#000',
      offset: 25,
    },
    legend: {      
      display: false,
    },
  },
};

const AdminCont2Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/bk/admin/dashboard/price');
        const labels = response.data.map((item) => item.dateCalc);
        const prices = response.data.map((item) => item.totalPrice);
        
        const backgroundColors = [
          "#ACE2E1", "#A5B68D", "#C6DCBA", "#D2E0FB", "#F4D9D0", "#FFCF81",
          "#D1BB9E", "#E4B1F0", "#C65BCF", "#747264", "#C39898", "#FF6969",
        ];

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "매출금액 판매 현황",
              data: prices,
              backgroundColor: backgroundColors,
              borderColor: "#fff",
              fill: true,
              tension: 0.2,
            },
          ],
        });
      } catch (error) {
        console.error("데이터 가져오기 실패", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Doughnut options={options} data={chartData} width={350} height={350} />
    </div>
  );
};

export default AdminCont2Chart;
