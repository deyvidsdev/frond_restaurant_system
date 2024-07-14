import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const AreaCard = ({text1, text2, text3}) => {

    const data = [
        { name: 'Group A', value: 70 },
        { name: 'Group B', value: 300 },
    ];
    const COLORS = ['#00D0FB', '#00C49F'];
    return (
        <div className='flex shadow-xl rounded-xl items-center px-5 py-1 justify-between dark:bg-gradient-to-b from-gris-top-dashboard to-gris-bottom-dashboard'>
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