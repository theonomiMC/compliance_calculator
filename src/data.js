const data = [
    {
        "id": 12,
        "title": "აირჩიეთ",
        "value": "choose"
    },
    {
        "id": 1,
        "title": "სრული შესაბამისობა",
        "value": "s"
    },
    {
        "id": 2,
        "title": "მეტწილი შესაბამისობა",
        "value": "m"
    },
    {
        "id": 3,
        "title": "ნაწილობრივი შესაბამისობა",
        "value": "n"
    },
    {
        "id": 0,
        "title": "არაა შესაბამისობა",
        "value": "no"
    },
]

const engData=[
{
    "id": 12,
    "title": "choose option...",
    "value": "choose"
},
{
    "id": 1,
    "title": "Full Compliance",
    "value": "s"
},
{
    "id": 2,
    "title": "Substantial Compliance",
    "value": "m"
},
{
    "id": 3,
    "title": "Partial Compliance",
    "value": "n"
},

{
    "id": 0,
    "title": "Non-Compliance",
    "value": "no"
},
]
const states = {

    "state1": {
        "number":1,
        "stateValues": { 1: "", 2: "" },
       "stateOptions": [1, 2]
    },

    "state2": {
        "number":2,
        "stateValues":{1:"", 2:"", 3:"",4:"",5:"",6:""},
       "stateOptions":[1,2,3,4,5,6]
        
    },
    "state3": {
        "number":3,
        "stateValues":{1:"", 2:""},
       "stateOptions":[1,2]
        
    },
    "state4": {
        "number":4,
        "stateValues":{1:"", 2:"", 3:"",4:""},
       "stateOptions":[1,2,3,4]
        
    },
    "state5": {
        "number":5,
        "stateValues":{1:"", 2:"", 3:""},
       "stateOptions":[1,2,3]
        
    },
}

const final=[
    {
        "result-geo":"უარი",
        "result-eng":"Refuse",
        "id":"1"
    },
    {
        "result-geo":"პირობითი აკრედიტაცია",
        "result-eng":"Temporary media Accreditation",
        "id":"2"
    },
    {
        "result-geo":"აკრედიტაცია ანგარიშით",
        "result-eng":"Accreditation With Account",
        "id":"3"
    },
    {
        "result-geo":"სრული აკრედიტაცია",
        "result-eng":"Full Accreditation",
        "id":"3"
    },
]
const colorSet=[
    {
        "full":"rgb(46 204 113 / 57%)"
    },
    {
        "positive":"rgb(233 243 171)"
    },
    {
        "partial":"rgb(247 202 24 / 73%)"
    },{
        "negative":"rgb(241 130 141 / 71%)"
    }
]
export { data, states, engData, final, colorSet }