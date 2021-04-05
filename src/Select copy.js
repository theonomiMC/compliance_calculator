import React, { useEffect, useState } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { data } from './data'
import useConvertToRoman from './useConvertToRoman'

const Select = ({ selectState, number, parentCallback }) => {
    const [state, setState] = useState(selectState["stateValues"] || [])
    const romanNumber=useConvertToRoman(number)
    let result = ""
    // convert number to roman
    const convertToRoman = (n) => {
        const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        let numToRoman = "";
        const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        for (var i = 0; i < numbers.length; i++) {
            while (n >= numbers[i]) {
                numToRoman += romans[i];
                n -= numbers[i];
            }
        }
        return numToRoman;
    }
    const handleChange = e => {
        let value = e.target.value
        setState({ ...state, [e.target.name]: value })
    }
    const optionValue = (optionName) => data.map((el, i) => (
        <option key={i} name={optionName} value={el.value}>{el.title}</option>
    ))
    var count = {}
    const getResult = () => {
        let arr = Object.values(state)
        arr.forEach(i => { count[i] = (count[i] || 0) + 1 })
        if (!count[""]) {
            if (arr.includes("no")) {
                result = "არა"
                document.getElementById(number).style.backgroundColor = "rgb(241, 130, 141)"
            } else if (count["n"] <= 1 && count["n"] >= 0) {
                result = "მეტწილად"
                document.getElementById(number).style.backgroundColor = "rgb(238, 238, 238)"
            } else if (count["n"] && count["n"] >= 2) {
                result = "ნაწილობრივ"
                document.getElementById(number).style.backgroundColor = "rgba(247, 202, 24, 1)"
            } else if (count["m"] && count["m"] >= 2) {
                result = "მეტწილად"
                document.getElementById(number).style.backgroundColor = "rgb(238, 238, 238)"

            } else {
                result = "სრული"
                document.getElementById(number).style.backgroundColor = "rgb(162, 222, 208)"
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
                    {/* <strong>{convertToRoman(number)}</strong> */}
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
                    <div className="main-row-title" id={`${number}`}>
                        <span style={{ padding: '2px 3px' }}>{result}</span>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default Select