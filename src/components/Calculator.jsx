import { useEffect, useState } from "react";
import Table from "./Table";
import { calculateInvestmentResults } from "../utils/investment";

const initialInputNames = {
  "Initial investment": "",
  "Annual investment": "",
  "Expected return": "",
  Duration: "",
};

export default function Calculator() {
  const [inputFields, setInputFields] = useState(initialInputNames);
  const [result, setResult] = useState([]);
  const [errors, setErrors] = useState({});

  function onHandleChange(e, key) {
    if (e <= 0 || e % 1 !== 0) {
      setErrors((prev) => ({
        ...prev,
        [key]: "Need to be more than 0 and integer",
      }));
      return;
    }
    setInputFields((prev) => ({ ...prev, [key]: +e }));
    setErrors({});
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
    <>
      <div className='py-6 mx-auto md:py-12'>
        <section
          className='max-w-sm mx-auto md:max-w-xl'
          role='form'
          aria-labelledby='calculator-title'
        >
          <h2 id='calculator-title' className='sr-only'>
            Investment Calculator Input Form
          </h2>
          <ul className='grid grid-cols-2 gap-4 p-6 from-blue-400 to-cyan-400 bg-gradient-to-tr rounded-xl dark:bg-gradient-to-b dark:from-cyan-800 dark:to-blue-900'>
            {Object.entries(inputFields).map(([key, value]) => (
              <li key={key} className='flex flex-col gap-1'>
                <label
                  className='text-xs font-bold md:text-lg text-nowrap text-black/80 dark:text-white/90'
                  htmlFor={`input-${key.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {key}
                </label>
                <input
                  id={`input-${key.replace(/\s+/g, "-").toLowerCase()}`}
                  className='px-2 py-1 rounded-lg outline-none bg-white/80 dark:bg-white/40 md:min-w-36'
                  key={key}
                  value={value}
                  type='number'
                  required
                  aria-describedby={errors[key] ? `error-${key}` : undefined}
                  aria-invalid={!!errors[key]}
                  onChange={(e) => onHandleChange(e.target.value, key)}
                ></input>
                {errors[key] && (
                  <p
                    id={`error-${key}`}
                    className='text-[9px] text-red-500'
                    role='alert'
                    aria-live='polite'
                  >
                    {errors[key]}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
      {result.length > 0 && inputFields["Annual investment"] != 0 ? (
        <Table result={result} />
      ) : (
        <div className='py-8 text-center text-gray-500 dark:text-gray-400'>
          No investment data to display. Please enter valid data.
        </div>
      )}
    </>
  );
}
