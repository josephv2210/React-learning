
import { useGlobalContext } from '../context/global.context';
import CompB from './CompB';

const compA = () => {
  // const data = {
  //   name: 'Juan',
  //   age: 22,
  //   location: 'Madrid',
  // }

  const { value } = useGlobalContext();
  console.log('value::: ', value)

  return (
    <div>
        <div> &lt; compA /&gt; </div>
        <CompB />
    </div>
  )
}

export default compA