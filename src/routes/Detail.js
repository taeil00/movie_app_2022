import React from 'react';
import './Detail.css';




class Detail extends React.Component{

    componentDidMount(){
        const { location, history } = this.props;

        //location.state가 없는 경우 Home으로 리다이렉션
        if(location.state && location.state === undefined){
            history.push('/');
        }
    }

    render(){
        console.log(this.props);
        const { location } = this.props;

        if(location.state){
            return ( 
                <div className="details">
                    <span className="mTitle">{location.state.title}</span><br/>
                    <span>{location.state.summary}</span>
                    <img src = {location.state.poster} alt={location.state.title}/>
                </div>
            )

        }else{
            return null;
        }
    }
}


export default Detail;