import { Container, Col, Row } from 'react-bootstrap'
import SelectEng from './SelectEng'
import React, {useState} from 'react'
import { states, final, engData } from './data';

const HomeGeo = () => {
  const [collectedResults, setCollectedResults] = React.useState([])
  const [state, setState] = useState('')
  const callBack = (result) => {
    if (collectedResults.some(obj => obj.id === result.id)) {
      setCollectedResults(collectedResults.map(obj => obj.id === result.id ? { ...obj, result: result.result } : obj))
    } else {
      setCollectedResults([...collectedResults, result])
    }
  }
// console.log(collectedResults)
  const getFinalResult = () => {
    let arrayOfResults=collectedResults.map(el=>el.result)
    if (collectedResults.length === 5) {
      if (arrayOfResults.includes(engData[4].title)) {
        setState(final[0]['result-eng'])
      } else if (arrayOfResults.includes(engData[3].title)) {
        setState(final[1]['result-eng'])
      } else if (arrayOfResults.includes(engData[2].title)) {
        setState(final[2]['result-eng'])
      } else { setState(final[3]['result-eng']) }
    }

  }
  React.useEffect(()=>{
    getFinalResult()
 })
  return <Container>
    <div className="wrapper">
      <Row className="main-row">
        <Col>
          <h3>Standard</h3>
        </Col>
        <Col>
          <h3>Component</h3>
        </Col>
        <Col>
          <h3 >Compliance</h3>
        </Col>
        <Col>
          <h3 style={{textAlign:'right'}}>Result</h3>
        </Col>
      </Row>
    </div>
    <SelectEng selectState={states.state1} number={1} parentCallback={callBack}/>
    <SelectEng selectState={states.state2} number={2} parentCallback={callBack}/>
    <SelectEng selectState={states.state3} number={3} parentCallback={callBack}/>
    <SelectEng selectState={states.state4} number={4} parentCallback={callBack}/>
    <SelectEng selectState={states.state5} number={5} parentCallback={callBack}/>
    <div style={{textAlign:"center"}}>
      <h3>Conclusion: </h3>
      <h3>{state}</h3>
    </div>
  </Container>
}

export default HomeGeo