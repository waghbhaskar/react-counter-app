import React, {Component} from "react";
class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state={count: 0};
    }

    // increment counter logic
    increment = () => {
        this.setState(
            {
                count: this.state.count + 1
            }
        );
    }

    // decrement counter logic
    decrement = () => {
        if(this.state.count > 0) {
            this.setState(
                {
                    count: this.state.count - 1
                }
            );
        }
    }

    // return output
    render() {
        return (
            <div className="counter">
                <h2>Class Component Counter</h2>
                <p>
                    {this.state.count}
                </p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

// export component class
export default CounterClass;