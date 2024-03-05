import Cities from "./Cities"
import Message from "./Message"

const App = () => {

  const cities = [
    "Seattle",
    "Atlanta",
    "Los Angeles",
    "Dallas",
  ]


  const student = 'Sabita'

  return (
    <div>
      <Cities dylanCities={cities} sabita={student}/>
      <Message dylanCities={cities}/>
    </div>
  )
}
export default App