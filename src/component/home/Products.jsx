import React from 'react';
import { Route } from 'react-router-dom';
import ShowDetailsPage from '../Product-Details/ShowDetailsPage';
import LatestStories from '../Product-Details/LatestStories'
import ProductArray from '../Product-Details/ProductArray'


export class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: this.props.match,
            index: '',
            articles: ProductArray,
        }
    }

    handleId = (id) => {
        console.log("id here", id);
        console.log('match', this.state.match);

        this.setState({
            index: id
        })
    }

    componentWillMount() {
        if (typeof (this.state.match) == 'object') {
            this.handleId(this.state.match.params.id)
        }
    }

    render() {

        return (<div id="product" className="ideasWrapper1">

            <Route exact path='/' render={() => <div>

                <LatestStories handleId={this.handleId} />

            </div>} />
            <Route path={`/products/:id`} render={routerProps => <ShowDetailsPage hello={this.state.index} articles={this.state.articles} />} />
        </div>
        )
    }
}

export default Products;