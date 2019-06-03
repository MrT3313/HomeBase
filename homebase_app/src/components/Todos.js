// REACT
import React, { Component } from "react"

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS
    import { getUserTodos } from '../redux/actions/a_getUserTodos'

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        // import theme from '../styles/footer_homepage'

// COMPONENTS
    import Todo from './Todo'

// ASSETS


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const TodosContainer = styled.div`
    position: relative;    
    display: flex;
    flex-direction: column;
    align-items: center;
    

        .DIVIDER {
            position: absolute;
                top: 25px;
            display: flex;

            height: 20px;
            width: 95%;
            border-radius: 5px;

            background-color: blue;
        }
        .todoContent {
            width: 80%;

            .todoTitle {
                margin-bottom: 40px;
            }
        }

    `;

class Todos extends Component {

    componentDidMount() {
        console.log("FORCED CURRENT USER", this.props.currentUserID)
        this.props.getUserTodos(this.props.currentUserID)
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <TodosContainer>
                    {/* Position Absolutly based on <TodosContainer /> */}
                    <div className='DIVIDER'>
                        {/* DIVIDER */}
                    </div>

                    <div className='todoContent'>
                        <div className='todoTitle'>
                            TODOs:
                        </div>
                        <div className='todo_LIST'>
                            {/* CONNECT TO STORE
                            MAP PROPS */}
                            {this.props.currentUserTODOS.map( todo => {
                                console.log(todo)
                                return (
                                    <Todo todo={todo} />
                                )
                            })}
                        </div>
                    </div>
                </TodosContainer>
            </ThemeProvider>

        )
    }
}

// MAP STATE TO PROPS
const mapStateToProps = state => {
    return {
        currentUserID: state.r_login.currentUserID,
        currentUserTODOS: state.r_todos.todos,
    }
}

export default connect(
    mapStateToProps,
    {
        getUserTodos
    }
)(Todos)

// export default Todos