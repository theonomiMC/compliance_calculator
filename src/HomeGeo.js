import { Container, Col, Row } from 'react-bootstrap'
import Select from './Select'
import React, {  useState } from 'react'
import { states, final, data } from './data';

const HomeGeo = (props) => {
  const [collectedResults, setCollectedResults] = React.useState([])
  const [state, setState] = useState('')
  const callBack = (result) => {
    if (collectedResults.some(obj => obj.id === result.id)) {
      setCollectedResults(collectedResults.map(obj => obj.id === result.id ? { ...obj, result: result.result } : obj))
    } else {
      setCollectedResults([...collectedResults, result])
    }

  }
  const getFinalResult = () => {
    let arrayOfResults=collectedResults.map(el=>el.result)
    if (collectedResults.length === 5) {
      if (arrayOfResults.includes(data[4].title)) {
        setState(final[0]['result-geo'])
      } else if (arrayOfResults.includes(data[3].title)) {
        setState(final[1]['result-geo'])
      } else if (arrayOfResults.includes(data[2].title)) {
        setState(final[2]['result-geo'])
      } else {
        setState(final[3]['result-geo'])
      }
    }
  }
React.useEffect(()=>{
   getFinalResult()
})
 
  return <Container className="geo-container">
    <div className='wrapper'>
      <h2 className='sub-heading'> უმაღლესი საგანმანათლებლო პროგრამების აკრედიტაციის სტანდარტებთან შესაბამისობის გამომთვლელი აპლიკაცია</h2>
    </div>
    <div className="wrapper">
      <Row className="main-row">
        <Col>
          <h3>სტანდარტი</h3>
        </Col>
        <Col >
          <h3>კომპონენტი</h3>
        </Col>
        <Col>
          <h3>შესაბამისობა</h3>
        </Col>
        <Col>
          <h3 style={{textAlign:'right'}}>დასკვნა</h3>
        </Col>
      </Row>
    </div>
    <Select selectState={states.state1} number={1} parentCallback={callBack}/>
    <Select selectState={states.state2} number={2} parentCallback={callBack} />
    <Select selectState={states.state3} number={3} parentCallback={callBack} />
    <Select selectState={states.state4} number={4} parentCallback={callBack} />
    <Select selectState={states.state5} number={5} parentCallback={callBack} />
    <div style={{ textAlign: "center", marginTop:'2rem' }} aria-label="Final result">
      <h2>საბოლოო შედეგი: </h2>
      <h2>{state}</h2>
    </div>
  </Container>
}

export default HomeGeo
