import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Invoice</h1>
      <div className="card bg-white p-4 shadow rounded-lg">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Item 1</td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">$10.00</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Item 2</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">$20.00</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Item 3</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">$15.00</td>
            </tr>
          </tbody>
        </table>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;