// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    // import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        // import theme from '../styles/footer_homepage'

// ASSETS



// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const TodoContainer = styled.div`
        display: flex;
        margin-bottom: 10px;

        border: 1px solid black
        border-radius: 5px;
    `;

class Todo extends Component {
    state = {
        show_description: false
    }
    
    render() {
        return (
            <TodoContainer>
                {this.props.todo.todoTitle}

                {
                    this.state.show_description && <div tglDescription> {this.props.todo.todoDescription} </div>
                }
            </TodoContainer>

        )
    }
}
export default Todo