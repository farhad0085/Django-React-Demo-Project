import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../utils/axios'

const AboutPage = () => {

    const [text, setText] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        axios.get("/about")
        .then(res => {
            setText(res.data.message)
            setLoading(false)
        })
        .catch(error => {
            console.log(error.response);
            setError("Something went wrong")
            setLoading(false)
        })
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>About Page</h1>
            <Link to="/">Home Page</Link>
            <p>{loading ? "Loading..." : text}</p>
            <p>{error}</p>
        </div>
    )

}


export default AboutPage