import { useEffect, useState } from "react";
import Table from "./Table";
import { calculateInvestmentResults } from "../utils/investment";

const initialInputNames = {
  "Initial investment": 10000,
  "Annual investment": 1200,
  "Expected return": 6,
  Duration: 10,
};

export default function Calculator() {
  const [inputFields, setInputFields] = useState(initialInputNames);
  const [result, setResult] = useState([]);
  console.log("result", result);

  function onHandleChange(e, key) {
    setInputFields((prev) => ({ ...prev, [key]: e.target.value }));
  }

  useEffect(() => {
    const {
      "Initial investment": initialInvestment,
      "Annual investment": annualInvestment,
      "Expected return": expectedReturn,
      Duration: duration,
    } = inputFields;

    const result = calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });

    if (result.length > 0) {
      setResult(result);
    }
  }, [inputFields]);

  return (
    <div className='py-6 mx-auto bg-blue-100'>
      <section className='max-w-sm mx-auto'>
        <ul className='grid grid-cols-2 gap-4 p-6 bg-indigo-200 rounded-xl dark:bg-indigo-800'>
          {Object.entries(inputFields).map(([key, value]) => (
            <li key={key} className='flex flex-col gap-1'>
              <label className='text-xs font-bold text-black/80 dark:text-white/90'>
                {key}
              </label>
              <input
                className='px-2 py-1 border rounded-lg bg-white/80'
                key={key}
                value={value}
                type='number'
                required
                onChange={(e) => onHandleChange(e, key)}
              ></input>
            </li>
          ))}
        </ul>
      </section>
      {result.length > 0 && inputFields["Annual investment"] != 0 && (
        <Table result={result} />
      )}
    </div>
  );
}
