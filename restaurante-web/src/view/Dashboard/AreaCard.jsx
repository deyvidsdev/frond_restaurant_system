import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const AreaCard = ({text1, text2, text3}) => {

    const data = [
        { name: 'Group A', value: 70 },
        { name: 'Group B', value: 300 },
    ];
    const COLORS = ['#0088FE', '#00C49F'];
    return (
        <div className='flex shadow-lg items-center px-5 justify-between'>
            <div className='flex flex-col gap-y-1'>
                <p className='text-xl text-gray-500 font-semibold dark:text-gray-300'>{text1}</p>
                <p className='text-2xl font-semibold dark:text-white'>{text2}</p>
                <p className='text-gray-400 font-semibold dark:text-white'>{text3}</p>
            </div>
              <PieChart width={100} height={100}>
                  <Pie
                      data={data}
                      cx={50}
                      cy={45}
                      innerRadius={20}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                  >
                      {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                  </Pie>
                  <Tooltip/>
                  
              </PieChart>
        </div>
    )
}
export default AreaCard