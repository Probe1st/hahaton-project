export default function Tournament() {
    const urlParams = window.location.href;
    const matches = urlParams.match(/\d+/g)[1];

    return (
        <>
            <h1>Tournament</h1>
            <p>query</p>
            <p>{matches}</p>
        </>        
    )
}