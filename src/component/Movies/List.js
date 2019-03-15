import React from 'react';
import MovieCard from './Card';

class MovieList extends React.Component{
    
    constructor (props){
        super(props);
        this.state={ data: this.props.data,
        inputvalue:'',
        ischeck:false
    }
        this.onChange = this.onChange.bind(this);
        }

        onChange(e){
            let {ischeck,inputvalue} = this.state;
            if(e.target.type === 'checkbox')
            {
                
                ischeck = e.target.checked;
            }
            else
            {
                inputvalue = e.target.value;
            }
           const result = this.props.data.filter(a => a.Title.toLowerCase().includes(inputvalue.toLowerCase()) && a.Watched === ischeck);
           this.setState({
               data: result,
               ischeck : ischeck,
               inputvalue : inputvalue
           })
        }

        
           
        
    render(){
        return(
            <>
            <br/>
            <input type="text" placeholder="Enter your text" onChange={this.onChange}/>
            <input type="checkbox" onChange={this.onChange}/> Watched Movies 
            <br/>
            <br/>
            {
              this.state.data.map(m => <MovieCard key={m.imdbID} {...m}/>)
            }
            </>
        )
    }
}

// const MovieList = ({data}) => data.length && data.map(m => <MovieCard key={m.imdbID} {...m}/>)
export default MovieList;