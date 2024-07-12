import React, { useEffect } from 'react'
import Header from './components/Header'
import Email from './components/Email'
import { useDispatch } from 'react-redux'
import { addUser } from './redux/userSlice'
import Counter from './components/Counter'
import ButtonsCounter from './components/ButtonsCounter'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
  })
  return (
    <div>
      <Header />
      <Email />
      <Counter />
      <ButtonsCounter />
    </div>
  )
}

export default App