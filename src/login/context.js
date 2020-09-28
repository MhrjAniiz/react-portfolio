import React, { Component } from 'react'
import instance from './instance'


const portfolioContext = React.createContext();


 class Context extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            image : '',
            url:"",
            description:'',
            results: []
        }
    }

    componentDidMount (){
        instance.get('/results.json').then((res)=>{
           const fetched = []

           for(let key in res.data){
               fetched.push({...res.data[key],id: key})
           }
           this.setState({
               results: fetched
           })
        })
    }

    handleChange = (e) =>{
     
        this.setState({
            [e.target.name]: e.target.value
        })
       

    }
    handlePost = e =>{
        e.preventDefault()
       
        const Data = {
            title: this.state.title,
            image: this.state.image,
            url:this.state.url,
            description: this.state.description
        };

        instance.post("/results.json",Data).then((res)=>{
            console.log(res)
            const results= [...this.state.results,{...Data,id:res.data.name},]
            this.setState({
                title:'',
                image: "",
                url:"",
                description: "",
                results: results


            })
        })
    }
    render() {
        return (
           
            <portfolioContext.Provider value={{...this.state, handleChange :this.handleChange,handlePost:this.handlePost}}>
            {this.props.children}
        </portfolioContext.Provider>
           
        )
    }
} 


const portfolioConsumer = portfolioContext.Consumer;

export {portfolioContext,Context,portfolioConsumer}
