import MarkdownCard from "./MarkdownCard";
import { useEffect, useState } from "react"
import Navbar from "./Navbar";


export default function Question() {

    const [question, setQuestion] = useState("Loading...")
    
    useEffect(() => {
        fetch("http://localhost:8000/question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ topic: "stack"})
        })
          .then(res => res.json())
          .then(data => {
            setQuestion(data.question)
          })
    }, [])

    return (
        <>
        <Navbar showSignIn={true}/>
        <div className="home-main">
            <MarkdownCard content={question} />
        </div>
        </>
    )
}