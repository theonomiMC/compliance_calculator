import React, { useEffect, useState } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { data, colorSet } from './data'
import useConvertToRoman from './useConvertToRoman'

const Select = ({ selectState, number, parentCallback }) => {
    const [state, setState] = useState(selectState["stateValues"] || [])
    const romanNumber = useConvertToRoman(number)
    let result = ""

    const handleChange = e => {
        let value = e.target.value
        setState({ ...state, [e.target.name]: value })
    }
    const optionValue = (optionName) => data.map((el, i) => (
        <option key={i} name={optionName} value={el.value}>{el.title}</option>
    ))

    const getResult = () => {
        var count = {}
        let arr = Object.values(state)
        let resultBackground = document.getElementById(number)
        arr.forEach(i => { count[i] = (count[i] || 0) + 1 })
        if (!count[""]) {
            if (arr.includes("no")) {
                result = data[4].title
                resultBackground.style.backgroundColor = colorSet[3].negative
            } else if (count["n"] <= 1 && count["n"] >= 0) {
                result = data[2].title
                resultBackground.style.backgroundColor = colorSet[1].positive
            } else if (count["n"] && count["n"] >= 2) {
                result = data[3].title
                resultBackground.style.backgroundColor = colorSet[2].partial
            } else if (count["m"] && count["m"] >= 2) {
                result = data[2].title
                resultBackground.style.backgroundColor = colorSet[1].positive

            } else {
                result = data[1].title
                resultBackground.style.backgroundColor = colorSet[0].full
            }
        }
    }

    getResult()
    function sendData() {
        if (result !== "") {
            parentCallback({ "result": result, "id": number })
        }

    }
    useEffect(() => {
        sendData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result, state])
    return (
        <div className="wrapper">
            <Row className="main-row" >
                <Col style={{
                    width: '145px',
                    marginLeft: '40px',
                    marginRight: '40px',
                    minWidth: '80px'
                }}>
                    <strong>{romanNumber}</strong>
                </Col>
                <Form className="form">
                    {selectState["stateOptions"].map((i) => (
                        <Row key={i}>
                            <Col xs={3}>
                                <Form.Label htmlFor={Date.now()}>{number}.{i}</Form.Label>
                            </Col>
                            <Col xs={8}>
                                <Form.Control as="select" id={Date.now()} name={i} onChange={handleChange} value={state[i]}>
                                    {optionValue(i)}
                                </Form.Control>
                            </Col>
                        </Row>
                    ))}
                </Form>
                <Col xs={3}>
                    <div className="result-box" id={`${number}`}>
                    {result}                 
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default Select