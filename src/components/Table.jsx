import { formatter } from "../utils/investment";

export default function Table({ result }) {
  console.log("result", result);

  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <section className='my-6 bg-blue-400 dark:bg-cyan-900'>
      <table className='mx-auto text-black/70'>
        <thead className='text-[10px]'>
          <tr className='text-black '>
            <th className='px-1 border border-blue-200'>Year</th>
            <th className='px-1 border border-blue-200'>Investment Value</th>
            <th className='px-1 border border-blue-200'>Interest(Year)</th>
            <th className='px-1 border border-blue-200'>Total Interest</th>
            <th className='px-1 border border-blue-200'>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((row) => {
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;

            const totalAmountInvested = row.valueEndOfYear - totalInterest;
            return (
              <tr key={row.id} className='hover:bg-blue-300 text-[10px]'>
                <td className='text-right border border-blue-300'>
                  {row.year}
                </td>
                <td className='text-right border border-blue-300'>
                  {formatter.format(row.valueEndOfYear)}
                </td>
                <td className='text-right border border-blue-300'>
                  {formatter.format(row.interest)}
                </td>
                <td className='text-right border border-blue-300'>
                  {formatter.format(totalInterest)}
                </td>
                <td className='text-right border border-blue-300'>
                  {formatter.format(totalAmountInvested)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
