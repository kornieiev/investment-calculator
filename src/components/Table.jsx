import { formatter } from "../utils/investment";

export default function Table({ result }) {
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <section
      className='px-4 overflow-hidden bg-blue-400 dark:bg-cyan-900'
      aria-labelledby='investment-table-title'
      role='investment-table'
    >
      <h2 id='investment-table-title' className='sr-only'>
        Investment Calculation Results
      </h2>
      <div className='overflow-x-auto'>
        <table
          className=' max-w-[600px] w-full mx-auto text-black/70 md:max-w-xl'
          role='table'
          aria-label='Investment results by year'
        >
          <thead className='text-xs md:text-lg md:text-nowrap bg-blue-500/50 text-wrap dark:bg-cyan-800/50 '>
            <tr className='text-black dark:text-white/80 '>
              <th scope='col' className='px-2 py-2 md:px-4'>
                Year
              </th>
              <th scope='col' className='px-2 py-2 md:px-4'>
                Investment Value
              </th>
              <th scope='col' className='px-2 py-2 md:px-4'>
                Interest(Year)
              </th>
              <th scope='col' className='px-2 py-2 md:px-4'>
                Total Interest
              </th>
              <th scope='col' className='px-2 py-2 md:px-4'>
                Invested Capital
              </th>
            </tr>
          </thead>
          <tbody className='text-xs text-right divide-y divide-blue-300 dark:divide-cyan-700 md:text-lg'>
            {result.map((row) => {
              const totalInterest =
                row.valueEndOfYear -
                row.annualInvestment * row.year -
                initialInvestment;

              const totalAmountInvested = row.valueEndOfYear - totalInterest;
              return (
                <tr
                  key={row.id}
                  className=' dark:text-white/60 hover:bg-blue-300 dark:hover:bg-blue-900'
                >
                  <td className='px-2 py-1 text-left md:px-4'>{row.year}</td>
                  <td className='px-2 py-1 md:px-4'>
                    {formatter.format(row.valueEndOfYear)}
                  </td>
                  <td className='px-2 py-1 md:px-4'>
                    {formatter.format(row.interest)}
                  </td>
                  <td className='px-2 py-1 md:px-4'>
                    {formatter.format(totalInterest)}
                  </td>
                  <td className='px-2 py-1 md:px-4'>
                    {formatter.format(totalAmountInvested)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
