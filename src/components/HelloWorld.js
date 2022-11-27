import React from "react";
import ReactDOM from "react-dom"
export default class HelloWorld extends React.Component {
    render() {
        const jx = <div><p>This is Hello </p></div>

        return (jx);

    }
}
ReactDOM.render(<HelloWorld />, document.getElementById('root'));