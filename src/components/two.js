import React from "react";
import {Link} from "react-router-dom";

import MyContext from "./context";
import HigherOrderComp from "./HOC/higherOrderComp";

//count & countHandler are coming from HigherOrderComponent

class Two extends React.Component{

    constructor(name,city) {
        super(name,city);
        this.name = name;
        this.city = 'SURAT';
    }

    printName(){
        console.log(`My name is ${this.name}`);
    }

    passDataToParent(dataFromChild){
        dataFromChild(this.props.count);
    }

    render() {

        //getting usecontext
        const {name, dataFromChild} = this.context;

        return (
            <>
                <div style={{ margin: '50px' }}>

                    <div className={'forh1'}>
                        <h1>CLASS COMPONENT</h1>
                        <Link to={'/'}>GO TO FUNCTION COMPONENT</Link>
                    </div>

                    <h4>useContext Data: {name}</h4>
                    <h3>Counter App using Class Component w/ HigherOrderComponent : </h3>
                    <h2>{this.props.count}</h2>

                    <button
                        onClick={() => {
                            this.props.countHandler();
                        }}
                    >
                        Add!
                    </button>

                    <button
                        onClick={() => {
                            this.passDataToParent(dataFromChild);
                        }}

                        style={{ marginLeft: '50px' }}
                    >
                        PASS PROPS TO PARENT
                    </button>

                </div>

                <div style={{ margin: '50px', marginTop: '80px' }}>

                    <button
                        onClick={() => {
                            let first = new Two('Ronak Koladiya');
                            first.printName();

                            let two = new Example('Information Technology');
                            two.defineField();
                        }}
                    >
                        CHECK CONSOLE 1!
                    </button>

                    {/* Child Classes */}
                    <Example/>
                    <Example2 favfood={'Pizza'}/>
                    <Example3/>

                </div>
            </>
        );
    }
}

class Example extends Two{

    constructor(field){
        super();
        this.field = field;
    }

    defineField(){
        console.log(`I am studying in ${this.field}`);
    }

    render() {
        return (
            <button
                onClick={() => {
                    let first = new Two('Harsh Patel');
                    first.printName();

                    let two = new Example('Automobile Engineering');
                    two.defineField();
                }}

                style={{ marginLeft: '50px' }}
            >
                CHECK CONSOLE 2!
            </button>
        );
    }
}

class Example2 extends Example{

    constructor(props){
        super(props);
        this.state = {food: 'Rice'};
    }

    static getDerivedStateFromProps(props,state){
        return {food: props.favfood};
    }

    render() {
        return (
            <button
                onClick={() => {
                    let first = new Two('Jatin Panchal');
                    first.printName();

                    let two = new Example('Mechanical Engineering');
                    two.defineField();

                    console.log(`Getting '${this.city}' directly from super of parent class.`);

                    console.log(`This derivedstate food is ${this.state.food}.`);
                }}

                style={{ marginLeft: '50px' }}
            >
                CHECK CONSOLE 3!
            </button>
        );
    }
}

class Example3 extends Example2{

    constructor(props){
        super(props);
        this.state = {company: 'DELL', mount: true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({company: 'ASUS'});
        }, 1000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('beforeupdate').innerHTML = `Before update company was ${prevState.company}`;

        return null;
    }

    componentDidUpdate() {
        document.getElementById('afterupdate').innerHTML = `After update company is ${this.state.company}`;
    }

    changeCompany(){
        this.setState({company: 'LENOVO'});
    }

    shouldComponentUpdate(){
        return true;
    }

    render() {
        return (
            <>
                <div style={{ marginTop: '100px' }}>
                    <h1>Company name is {this.state.company}</h1>

                    <button
                        onClick={() => {
                            this.changeCompany();
                        }}
                    >
                        CHANGE COMPANY
                    </button>

                    <button
                        onClick={() => {
                            this.setState({mount: false})
                        }}

                        style={{ marginLeft: '50px' }}
                    >
                        DELETE COMPONENT
                    </button>

                    {/*child class*/}

                    {
                        this.state.mount && <Example4/>
                    }

                    <p id={'beforeupdate'}></p>
                    <p id={'afterupdate'}></p>
                </div>
            </>
        );
    }
}

class Example4 extends Example3{

    componentWillUnmount() {
        alert('componentWillUnmount is removing now...');
    }

    render() {
        return(
            <h2>componentWillUnmount</h2>
        );
    }
}

//for usecontext
Two.contextType = MyContext;

export default HigherOrderComp(Two);