import { ResponsiveContainer, BarChart, CartesianGrid, Tooltip, Legend, Bar, XAxis, YAxis } from "recharts"

const data = [
    {year: '2020', quantity: 23000},
    {year: '2021', quantity: 17000},
    {year: '2022', quantity: 18000},
    {year: '2023', quantity: 29000},
    {year: '2024', quantity: 15000},
    
]

const SimpleBarChart = () => {
    return(
      <div className="shadow-xl p-5 dark:bg-gradient-to-b from-gris-top-dashboard to-gris-bottom-dashboard rounded-lg">
      <div className="w-full pl-5 mb-10 mt-3">
          <p className="text-2xl font-semibold dark:text-white">Ventas por año</p>
      </div>
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
          <BarChart 
              data={data} 
              width={500} 
              height={100}
              margin={{
                  top:5,
                  right:20,
                  left:20,
                  bottom:5
              }}
              >
              <CartesianGrid strokeDasharray="4 1 2"/>
              <XAxis dataKey="month"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Bar dataKey="quantity" fill="#00D0FB"/>
          </BarChart>
      </ResponsiveContainer>
  </div>
    )
}

export default SimpleBarChart
