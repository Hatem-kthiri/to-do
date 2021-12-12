import React from "react";

class App extends React.Component {
    state = {
        value: "",
        data: [
            { Task: "React", id: 1 },
            { Task: "React props", id: 2 },
            { Task: "React state", id: 3 },
        ],
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        this.setState({
            data: [
                ...this.state.data,
                {
                    Task: this.state.value,
                    id: Math.random() * Math.pow(10, 17),
                },
            ],
        });
        this.setState({ value: "" });
        event.preventDefault();
    };

    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.data.map((task) => (
                    <h4 key={task.id}>{task.Task}</h4>
                ))}

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom :
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        );
    }
}

export default App;
