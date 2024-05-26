import React from "react"
import { ResponsiveContainer, BarChart, CartesianGrid, Tooltip, Legend, Bar, XAxis, YAxis } from "recharts"

const data = [
    {month: 'Enero', quantity: 100},
    {month: 'Febrero', quantity: 200},
    {month: 'Marzo', quantity: 300},
    {month: 'Abril', quantity: 400},
    {month: 'Mayo', quantity: 500},
    {month: 'Junio', quantity: 600},
    {month: 'Julio', quantity: 700},
    {month: 'Agosto', quantity: 800},
    {month: 'Septiembre', quantity: 900},
    {month: 'Octubre', quantity: 1000},
    {month: 'Noviembre', quantity: 1100},
    {month: 'Diciembre', quantity: 1200}
]

const SimpleBarChart = () => {
    return(
        <ResponsiveContainer width="80%" aspect={2}>
            <BarChart 
                data={data} 
                width={500} 
                height={300}
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
    )
}

export default SimpleBarChart
