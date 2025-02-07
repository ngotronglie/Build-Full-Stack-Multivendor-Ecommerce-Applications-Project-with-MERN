const Alert = () => {
    const _prompt = prompt("Enter your name: ");
    return (
        <div>
            <h1>Alert</h1>
            <p>{_prompt}</p>
        </div>
    )
}


export default Alert;