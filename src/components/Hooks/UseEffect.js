import React, { useEffect, useState } from 'react'
import useForm from './useForm'
import Hello from './hello'
import useFetch from './useFetch'

const UseEffect = () => {
  const [values, handleChange] = useForm({ name: '', address: '', email: '' })

  const [sayhello, setSayhello] = useState(true)

  const [number, setNumber] = useState(41)

  const url = `http://numbersapi.com/${number}`

  const { data, loading, error } = useFetch(url)

  // if no dependency is added, the effect is always called
  // It does a shallow comparison, if [values] is sent, then its called every time. Why? because the object is new evrytime
  // [values.name] is sent then changes in values.address doesn't call the effect
  // [values.name, values.address] -> only values,name & values.address changes trigger the effect
  useEffect(
    () => {
      console.log('Component re rendered!!')
    },
    [values.name, values.address]
  )

  useEffect(
    () => {
      console.log('The email changed!!', values.email)
    },
    [values.email]
  )

  return (
    <div>
      <hr/>
      <form>
        {' '}
				USE Effect!! Watch the console logging to check if teh component re renders!!!
        <input name='name' type='text' value={values.name} onChange={handleChange} />
        <input name='address' type='address' value={values.address} onChange={handleChange} />
        <input name='email' type='email' value={values.email} placeholder='email' onChange={handleChange} />
      </form>
      <hr/>
      <p>The button: Toggle, inverts a boolean variable. The conditional expression mounts and unmounts the Hello component</p>
      <p>The useEffect returns a function that will be called only when the component unmounts!!</p>
      <button onClick={() => setSayhello(!sayhello)}>Toggle</button>
      {sayhello && <Hello/>}
      <hr/>

      <button onClick={() => setNumber(n => n + 1)}>INCREMENT & FETCH</button>
      {number}
      {loading ? <div>Loading....</div> : <div>{data}</div>}
      {!data ? <div>Loading....</div> : <div>{data}</div>}
      {error && <div>Error has occured. Check console logs for details</div>}
      <hr/>
      
    </div>
  )
}

export default UseEffect
