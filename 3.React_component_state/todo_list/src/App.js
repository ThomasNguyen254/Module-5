import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: '',
        };
    }

    handleChange = (event) => {
        this.setState({ item: event.target.value });
    } 

    handleAddItem = () => {
        const { item } = this.state;
        if (item.trim() !== '') {
            this.setState((prevState) => ({
                list: [...prevState.list, item],
                item: '',
            }));
        }
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={this.state.item}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
