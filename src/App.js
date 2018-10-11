import React, { Component } from 'react';
import './App.css';
import comments from './components/comments/comments'

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            isloaded: true,
            iscloaded: false,
            items:[],
            images:[]
        }

    }

    componentDidMount(){

        fetch('https://dog.ceo/api/breeds/list/all')

            .then(res => res.json())
            .then(res2 => {
                this.setState({items : res2.message});
            });



    }

        showimagesHandler=(props)=>{
            const breed =props.
            fetch('https://dog.ceo/api/breeds/images')
                .then(res => res.json())
                .then(json => {
                    console.log(json.message);
                    this.setState({
                        isloaded:true,
                        images : json.message
                    })
                });
        }

    render(){
        var {isloaded , items ,images}=this.state;
        var id;

        if (this.state.items) {
            return (
                <div>
                    <ul>
                        {
                            Object.keys(items).map((key)=>(
                              <li><a onClick={this.showimagesHandler.bind(that, key)} href={key}>{key}</a></li>
                            ))
                        }
                    </ul>
                </div>
            )
        }



        if(isloaded==true) {
            return (
                <div id="root" className="App">
                    <div>
                        <h2>
                            {
                                // JSON.stringify(images)
                                // JSON.stringify(this.state.items)
                            }
                        </h2>

                    </div>
                </div>
            );
        }else {
            return <h2>Loading......</h2>;
        }
    }
}

export default App;
