import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// 차트 옵션 설정
const options = {
  type: 'bar',
  indexAxis: 'x',
  responsive: true,
  interaction: {
    intersect: true,
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'center', 
      labels: {
        padding: 20,
        font: {
          size: 12
        }
      }
    },
    datalabels: {
      display: false,
    },
  },
};

const AdminCont3Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/bk/admin/dashboard/sell')
        const lastMM = response.data.lastMM
        const nowMM = response.data.nowMM
        const labels = lastMM.map((item) => {
          if (item.room_type === '베리어프리 비지니스 디럭스') {
            return '베리어프리 비지니스'
          } else if (item.room_type === '이그제큐티브 그랜드 디럭스') {
            return '이그제큐티브 그랜드'
          } else if (item.room_type === '이그제큐티브 비지니스 디럭스') {
            return '이그제큐티브 비지니스'
          }
          return item.room_type;
        })
      
        const roomSell = lastMM.map((item) => item.tot_price)
        const roomNowSell = nowMM.map((item) => item.tot_price)

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "객실별 지난 달 현황",
              data: roomSell,
              backgroundColor: "#a3a6e0",
              borderColor: "##a3a6e0",
              fill: false,
              tension: 0.1,
            },
            {
              label: "객실별 이번 달 현황",
              data: roomNowSell,
              backgroundColor: "#eebfd7",
              borderColor: "#eebfd7",
              fill: false,
              tension: 0.1,
            },
          ],
        })
      } catch (error) {
        console.error("데이터 가져오기 실패", error);
      }
    }

    fetchData()
  }, []);

  return (
    <div>
      <Bar options={options} data={chartData} />
    </div>
  )
}

export default AdminCont3Chart;
