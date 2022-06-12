import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  let [result, setResult] = useState([]);
  return (
    <div>
      <button
        onClick={() => {
          const promise = axios.get("http://localhost:3000/employee");
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
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item) => (
              <tr key={`${item.id}-${item.name}`}>
                <td>{item.name}</td>
                <td>{item.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
