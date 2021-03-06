import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'



class ConsView extends Component {
    // STATE ----------------------->
    state= {
        cons: [],
        
    }


    // WILL MOUNT --------------------->
    componentWillMount() {
        this.getAllCons()
    }

    // FUNCTIONS ------------------------>
    getAllCons = async () => {
        const res = await axios.get('/cons')
        console.log(res.data)
        this.setState({cons: res.data})
    }

    render() {
        return (
            <div>
                
               {this.state.cons.map(con => {
                   return(
                   <Link key={con._id} to={`/cons/${con._id}`} cons={this.state.cons}>
                   <h3>{con.name}</h3>
                   <img src={con.img} alt={con.name}/>
                   </Link>
                   )
               })}
            </div>
        );
    }
}

export default ConsView;