import React from "react";

class ErrorBoundary extends React.Component{

    constructor(props){
        super(props);
        this.state = {error: null}
    }

    static getDerivedStateFromError(error){
        return {error: error}
    }

    render() {

        if(this.state.error){
            return <h1 style={{ margin: '50px' }} >Error Boundary Activated...</h1>
        }

        return this.props.children;
    }

}

export default ErrorBoundary;