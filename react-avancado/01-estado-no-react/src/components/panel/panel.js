import { Component } from "react";
import './panel.css'

class Panel extends Component {
    constructor() {
        super()
        this.state = {
            title: "Título do Painel"
        }
    }

    render() {
        return (
            <section className="panel" onClick={() => this.setState({ title: 'Olá, mundo!' })}>
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

export default Panel;