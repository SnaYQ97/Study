import './App.css'
import { Link } from "react-router-dom";

function App() {
  return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/lab2">Lab2</Link>
                    </li>
                    <li>
                        <Link to="/lab2/kula">Ball</Link>
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default App
