import { ResponsiveContainer, BarChart, CartesianGrid, Tooltip, Legend, Bar, XAxis, YAxis } from "recharts"

const data = [
    {month: 'Enero', quantity: 300},
    {month: 'Febrero', quantity: 500},
    {month: 'Marzo', quantity: 800},
    {month: 'Abril', quantity: 700},
    {month: 'Mayo', quantity: 900},
    {month: 'Junio', quantity: 1000},
    {month: 'Julio', quantity: 700},
    {month: 'Agosto', quantity: 500},
    {month: 'Septiembre', quantity: 500},
    {month: 'Octubre', quantity: 800},
    {month: 'Noviembre', quantity: 400},
    {month: 'Diciembre', quantity: 200}
]

const SimpleBarChart = () => {
    return(
      <div className="shadow-lg p-5">
      <div className="w-full pl-5 mb-10 mt-3">
          <p className="text-2xl font-semibold dark:text-white">Ventas por mes</p>
      </div>
      <ResponsiveContainer width="100%" height="80%" aspect={2}>
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
              <Bar dataKey="quantity" fill="#8884d8"/>
          </BarChart>
      </ResponsiveContainer>
  </div>
    )
}

export default SimpleBarChart
