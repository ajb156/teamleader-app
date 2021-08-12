import React from 'react'
import toast from 'react-hot-toast';

export const StoresScreen = () => {

  const notify = () => toast.custom('Here is your toast.');


  return (
    <div>
      <h1>Stores</h1>
      <button onClick={notify}>Make me a toast</button>
      
    </div>
  )
}
