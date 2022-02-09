import { Card } from "antd"
import Checkbox from "antd/lib/checkbox/Checkbox"


const SearchCheck = () => {
  
  const temp = ['The', 'Show', 'Must', 'Go', 'On']
   

  return (
    <Card> {temp.map((item) => <div><Checkbox>{item}</Checkbox></div>)}      
    </Card>
  )
}

export default SearchCheck
