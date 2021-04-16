import LoginButton from './Login'
import LogoutButton from './Logout'

export default function Header(props){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <h6 className="navbar-brand" >Story Peddler</h6>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/" data-toggle="tab">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/stories/new">Create a New Story</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/characters/new">Create a New Character</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="plotpoints/new">Create a New Plot Point</a>
                        </li>
                    </ul>
                    <li className="form-inline my-2 my-lg-0">
                        {/* <button type="button" className="btn btn-outline-primary">Login</button> */}
                        <button onClick={props.handleLogout}>Logout</button>
                    </li>
                </div>
            </nav>
            <blockquote className="blockquote text-center">
                <h1 className="mb-0">Story Peddler</h1>
                <footer className="blockquote-footer">A digital board for organizing projects, characters, and plots.</footer>
            </blockquote>
        </div>
    )
}