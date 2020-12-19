import React, { Component } from 'react'
import cities from './cities.json'
import './styles.css'


class Search extends Component {

    constructor(props){
        super(props)

        this.state = {
            search: ''
        }
    }

    handleInputChange = e => {
        e.preventDefault()
        this.setState ({
            search: e.target.value
        })
        console.log(this.state.search)
    }



    render() {
        let filteredCities = cities.filter(city => city.city.toLowerCase() === this.state.search.toLowerCase())

        let matches = this.state.search 
        && filteredCities.map((city, index) => {
           
            return (
                <li key={index}>{city.city}, {city.state}</li>
            )})
      
       let howManyResults = filteredCities && filteredCities.length? filteredCities.length : "No matches found"
       
       let color = howManyResults && filteredCities.length? "" : "darkred"

       let count = this.state.search? <h3 style={{color: color}}>{howManyResults}</h3> : <div/>
        return (
            <div className="page-container">

                <h1>How many US cities share a name?</h1>
                <input type="text" name="search" id="search" placeholder="Enter your City" onChange={this.handleInputChange} />
              {count}
              <ul>{matches}</ul>
              <p>Data imported from <a href="https://gist.github.com/Lwdthe1">@Lwdthe1</a> Created by <a href="https://www.linkedin.com/in/amelia-scarbrough/">Amelia</a></p>
            </div>
        )
    }
}


export default Search