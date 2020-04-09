import React, { Component } from 'react'
import AddToQueueIcon from '@material-ui/icons/AddToQueue'

export default class Fave extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isFave: false
        }
    }
    

    handleClick(e) {
        e.stopPropagation();
        this.setState({isFave:!this.state.isFave})
        console.log("handling Fave click!");
    }



    render() {


const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue';

        return (
          
                <div onClick= {(e) => this.handleClick(e)} className={`film-row-fave ${isFave}`}>
    <AddToQueueIcon />
</div>
           
        )
    }
}
