import logo from './logo.svg';
import './App.css';

function App() {
    const student = [
        {
            id: 1,
            name: "Nguyen Van A",
            age: 30,
            address: "Ha Noi"
        }
    ];
    return (
        <table border="1">
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Address</td>
                </tr>
            {student.map(student => (
                <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))}
        </table>
    );
}

export default App;
