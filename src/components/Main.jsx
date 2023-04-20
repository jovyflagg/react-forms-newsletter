
export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title">About Me</h1>
            <ul className="main--facts">
                <li>Full-Stack Software Engineer w/ Frontend focus</li>
                <li>C# / .NET,  SQL (6+ years)</li>
                <li>React / JavaScript (3+ years)</li>
                <li> HTML5, CSS3</li>
                <li>Figma, Adobe UXD, Sketch, Miro, WireFraming, Prototyping </li>
                <li>Git, TFS, CI/CD, Scrum</li>
                
            </ul>
        </main>
    )
}