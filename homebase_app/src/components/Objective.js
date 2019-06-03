// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    // import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        import theme from '../styles/footer_homepage'

// ASSETS


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ObjectiveContainer = styled.div`
        display: flex;
        justify-content: space-around;
        width: 100%;

        .trackingText {
            width: 50px;
        }

        .tracking {
            height: 15px;
            width: 15px;
            border: .5px solid black;
        }

        .true {
            background-color: green;
        }
    `;

class Objective extends Component {
    state = {
        isClicked_mon: false,
        isClicked_tu: false,
        isClicked_w: false,
        isClicked_th: false,
        isClicked_f: false,
        isClicked_s: false,
        isClicked_su: false,
        counter: 0
    }

    clickHandler_mon = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            isClicked_mon: !prevState.isClicked_mon
        }));
    }
    clickHandler_tu = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            isClicked_tu: !prevState.isClicked_tu
        }));
    }
    clickHandler_w = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            isClicked_w: !prevState.isClicked_w
        }));
    }
    clickHandler_th = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            isClicked_th: !prevState.isClicked_th
        }));
    }
    clickHandler_f = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            isClicked_f: !prevState.isClicked_f
        }));
    }
    clickHandler_s = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            isClicked_s: !prevState.isClicked_s
        }));
    }
    clickHandler_su = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            isClicked_su: !prevState.isClicked_su
        }));
    }
        

    render() {
        return (
            // <ThemeProvider theme={theme}>
                <ObjectiveContainer>
                    <div 
                        className={`${this.state.isClicked_mon} tracking trackingDay_1`}
                        // className='tracking trackingDay_1'
                        onClick={this.clickHandler_mon}
                    ></div>
                    <div 
                        className={`${this.state.isClicked_tu} tracking trackingDay_2`}
                        onClick={this.clickHandler_tu}
                    >
                    </div><div 
                        className={`${this.state.isClicked_w} tracking trackingDay_3`}
                        onClick={this.clickHandler_w}
                    >
                    </div><div 
                        className={`${this.state.isClicked_th} tracking trackingDay_4`}
                        onClick={this.clickHandler_th}
                    ></div>
                    <div 
                        className={`${this.state.isClicked_f} tracking trackingDay_5`}
                        onClick={this.clickHandler_f}
                    ></div>
                    <div 
                        className={`${this.state.isClicked_s} tracking trackingDay_6`}
                        onClick={this.clickHandler_s}
                    ></div>
                    <div 
                        className={`${this.state.isClicked_su} tracking trackingDay_7`}
                        onClick={this.clickHandler_su}
                    ></div>
                </ObjectiveContainer>
            // </ThemeProvider>

        )
    }
}
export default Objective