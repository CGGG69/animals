import{ useState} from 'react'

import'./App.css'

import AnimalsShow from './AnimalsShow'

function getRamdonAnimal() {
  const animals = ['cat', 'bird', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.ramdon() * animals.length)]

}

console.log(getRamdonAnimal())

function App() {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals ([...animals, getRamdonAnimal()])
  }
  const renderAnimals = animals.map((animal, index)=>{
    return <AnimalsShow type={animal} key = {index}/>
  })

  return (

    <div className='app'>
      <button onClick={handleClick}>Add Animmal</button>
    <div className='animal-list'>

    </div>
    </div>
  )
}

export default App
