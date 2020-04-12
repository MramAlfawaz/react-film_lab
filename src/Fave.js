import React, { Component } from 'react'
import AddToQueueIcon from '@material-ui/icons/AddToQueue'

export default class Fave extends Component {
    

    handleClick(e) {
        e.stopPropagation()
        console.log('Handling Fave click!')
      
        // console.log(e.target)
        // Add this line. You'll call the function passed through props.
        this.props.onFaveToggle()
      
        // Delete the setState() line. You no longer track state here.
        // this.setState({isFave: !this.props.isFave})
      }



    render() {


const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue';

        return (
          
                <div onClick= {(e) => this.handleClick(e)} className={`film-row-fave ${isFave}`}>
    <AddToQueueIcon />
</div>
           
        )
    }
}
