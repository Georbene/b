import axios from 'axios'
import React from 'react'
import {useState} from 'react'


const Connection = (props) => {
    // const [info, setInfo] = useState([])
    const [item, setitem] = useState('')
    
    // const endpoint = "http://localhost:3333/home";
    const url = "http://localhost:3333/submit";
    // const fetchInfo = () => {
    //     axios.get(endpoint)
    //         .then((result) => {
    //             console.log(result)
    //             let data = result.data
    //             setInfo(data)
    //         })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

    const submitInfo = () => {
        if (item === '') {
            alert("Fill the input")
        } else {
            // console.log(name)
            let obt = { item }
            axios.post(url, obt)
                .then(res => console.log('sent'))
            .catch(err => console.log(err))
        }
    }
    return (
        <>
            <h1>Connection</h1>
            {/* <button onClick={fetchInfo}>Fetch Info</button> */}
            <input type="text" name="item" onChange={(e) => { setitem(e.target.value) }} />
            <button onClick={submitInfo}>Submit</button>
            {/* {
                info.map((item, index) => {
                    return (
                        <div Key={index}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            } */}
        </>
    )
}
export default Connection