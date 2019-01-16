import React, { Component } from 'react';
import './App.css';
import comments from './components/comments/comments'

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            isloaded: false,
            iscloaded: false,
            items:[],
            images:[],
            title: []
        }

    }

    componentDidMount(){

        fetch('https://dog.ceo/api/breeds/list/all')

            .then(res => res.json())
            .then(res2 => {
                this.setState({items : res2.message});
            });



    }

    showimagesHandler=(key)=>{

        let breed =key;
        let api ='https://dog.ceo/api/breed/'+key+'/images';

        this.setState({
            isloaded:false,
            title:key
        })
        // console.log(api);

        fetch(api)
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

        if (this.state.items && isloaded==true) {
            return (
                <main>
                    <h1 className="mainHeading">Fetching Data from Dogs Api</h1>
                    <div className="col2">
                        <ul className="category">
                            {
                                Object.keys(items).map((key)=>(
                                  <li><a onClick={this.showimagesHandler.bind(this, key)}>{key}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div id="root" className="col10">
                        <div>
                            <h1 className="title">These are blongs to the {this.state.title}</h1>
                            <ul className="images_list">
                                    {images.map(key2=>(
                                        <li><img src={key2} /></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </main>
            )
        }if(this.state.items) {
            return (
                <main>
                    <h1 className="mainHeading">Fetching Data from Dogs Api</h1>
                    <div className="col2">
                        <ul className="category">
                            {
                                Object.keys(items).map((key)=>(
                                    <li><a onClick={this.showimagesHandler.bind(this, key)}>{key}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col10">
                        <h2>Please Select the Breed of Dog to View the Images of that Bread</h2>
                    </div>
                </main>
            );
        }else {
            return <h2>Loading......</h2>;
        }



        if(isloaded==true) {
            return (
                <div id="root" className="half">
                    <div>
                        <ul>
                            <li>items goes here</li>
                            {images.map(key2=>(
                                   <li><img src={key2} /></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            );
        }else {
            return <h2>Loading......</h2>;
        }
    }
}

export default App;
