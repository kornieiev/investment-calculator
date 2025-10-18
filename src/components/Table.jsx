export default function Table({ result }) {
  console.log("result", result);
  return (
    <section className='my-6 bg-blue-100'>
      <table className='mx-auto border border-white'>
        <thead className='text-[10px]'>
          <tr>
            <th className='px-1'>Year</th>
            <th className='px-1'>Investment Value</th>
            <th className='px-1'>Interest(Year)</th>
            <th className='px-1'>Total Interest</th>
            <th className='px-1'>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((row) => (
            <tr key={row.id} className='hover:bg-gray-50 text-[10px]'>
              <td className='text-right'>{row.year}</td>
              <td className='text-right'>{row.valueEndOfYear}</td>
              <td className='text-right'>{row.interest}</td>
              <td className='text-right'>{row.interest}</td>
              <td className='text-right'>{row.annualInvestment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
