import React, {Component} from 'react';

import './image-styles.css';

class Image extends Component{

	state = {
		loaded : false,
		error: false
	}
	
	handleLoad(){
		this.setState({ loaded: true })
	}
	handleError(){
		this.setState({  error: true })
	}

	componentDidMount(){
	}

	Loading( loaded ){
		return loaded ? 
			null
			:
			<small>...</small>
	}

	render(){
		const { error,  loaded } = this.state;
		if ( error ){
			return null
		}
		return(
			<div className="full-height-width" >
				{ this.Loading( loaded ) }
				<img alt="" style={{ opacity: loaded ? 1:0 }} src={this.props.src} onLoad={ () => this.handleLoad() }  onError={ () => this.handleError() } />
			</div>
		)

	}

}
export default Image

