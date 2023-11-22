import { useParams } from "react-router-dom"

export default function Tournament() {
    const {id} = useParams();

    return (
        <>
            <h1>Tournament</h1>
            <p>id: {id}</p>
        </>        
    )
}