import "./App.css";
import {useState} from "react";
import axios from "axios";

function App() {
    let [result, setResult] = useState([]);
    return (
        <div>
            <button
                onClick={() => {
                    const promise = axios.get("https://jsonplaceholder.typicode.com/posts");
                    promise
                        .then((response) => {
                            console.log(response);
                            setResult(response.data);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }}
            >
                Get employees
            </button>
            <button>Add</button>
            <button>Update</button>
            {result.length > 0 && (
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {result.map((item) => (
                        <tr key={`${item.id}-${item.title}`}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default App;
