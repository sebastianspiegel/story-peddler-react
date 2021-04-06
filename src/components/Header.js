export default function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="" data-toggle="tab">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Create a New Story</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Create a New Character</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Create a New Plot Point</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <blockquote className="blockquote text-center">
                <h1 className="mb-0">Story Peddler</h1>
                <footer className="blockquote-footer">A digital board for organizing projects, characters, and plots.</footer>
            </blockquote>
        </div>
    )
}