import React, { useState } from 'react'

const ExpeneceTracker = () => {

  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = (type) => {
    if(!description || isNaN(amount)) return;

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type, // income or expense
    }

    setTransactions([newTransaction, ...transactions]);
    setDescription('');
    setAmount('');
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((item)=>item.id !==id));
  }

  const total = transactions.reduce((acc, item)=>{
    return item.type === 'income' // if items type is "income" the add along with acc, otherwise subtract from acc
    ? acc + item.amount
    : acc - item.amount;
  },0)
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-6'>
      <h1 className='text-3xl font-bold mb-6'>💰Expense Tracker</h1>
      <div className='bg-white rounded shadow-xl p-6 w-full max-w-md'>
        <h2 className='text-xl font-semibold mb-4'>Add Transaction</h2>
        <input type="text"
        placeholder='Description'
        value={description}
        className='w-full mb-3 px-4 py-2 border rounded'
        onChange={(e) => setDescription(e.target.value)} />

        <input type="text"
        placeholder='Amount'
        value={amount}
        className='w-full mb-3 px-4 py-2 border rounded'
        onChange={(e) => setAmount(e.target.value)} />

        <div className='flex gap-5'>
          <button onClick={()=>handleAdd('income')} className='flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200'>Add Income</button>
          <button onClick={()=>handleAdd('expense')} className='flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200'>Add Expense</button>
        </div>
      </div>
      <div className='bg-slate-400 rounded shadow p-6 w-full max-w-md mt-6'>
        <h2 className='text-xl font-semibold mb-4'>Transactions</h2>
        {
          transactions.length === 0 ? (
            <p className='text-gray-400'>No transactions yet</p>
          ) : (
            <ul className='space-y-2'>
              {transactions.map((item) => (
                <li key={item.id}
                className={`flex justify-between items-center px-4 py-2 rounded border-l-8 ${
                  item.type === 'income'
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-500 bg-red-50'
                }`}>
                  <span>{item.description} - ₹{item.amount}</span>
                  <button onClick={()=> handleDelete(item.id)}>❌</button>
                </li>
              ))}
            </ul>
          )
        }
      </div>

      <div className='bg-slate-400 rounded w-full p-6 max-w-md mt-3'>
          <h2>Total balance</h2>
          <p className={`text-2xl font-bold ${total >= 0 ? 'text-green-600' 
            : 'text-red-600'}`}>₹{total.toFixed(2)}</p>
      </div>

    </div>
  )
}

export default ExpeneceTracker