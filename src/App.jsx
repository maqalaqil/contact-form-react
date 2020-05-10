import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from './component/nav and footer/Nav'
import ProductArray from "./component/Product-Details/ProductArray";
import Space from "./component/nav and footer/Space";
import Home from "./component/home/Home";
import Terms from "./component/home/Terms";
import Privacy from "./component/home/Privacy";
import Other from "./component/home/OtherProducts";
import Products from "./component/home/Products";
import Footer from "./component/nav and footer/Footer";
import Error404 from "./component/Error404";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: ProductArray,
    };
  }
  render() {
    return( <div className='App'>
   
        <Router>
          <div>
          {/* nav for all pages */}
          <Nav />

          <Space />

          {/* the body would change depending on the route*/}
          
          <div className="bodyClick">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/termsAndConditions/" exact component={Terms} />
              <Route path="/privacyPolicy/" exact component={Privacy} />
              <Route path="/otherProducts/" exact component={Other} />
              {/* <Route path="/about/" component={About} /> */}
              {/* pass prop from app to Products page */}

              <Route
                path="/products/:id"
                exact
                strict
                render={(routerProps) => {
                  return (
                    <div>
                      {this.state.articles.some((item) => {
                        console.log(
                          "found",
                          routerProps.match.params.id,
                          "id is",
                          item.id
                        );
                        return item.id == routerProps.match.params.id;
                      }) ? (
                        <Products
                          {...routerProps}
                          articles={this.state.articles}
                        />
                      ) : (
                        <Route component={Error404} />
                      )}

                      {console.log(
                        "routes id",
                        routerProps.match.params.id == 1
                      )}

                      {console.log(
                        "some function",
                        this.state.articles.some((item) => {
                          console.log(
                            "found",
                            routerProps.match.params.id,
                            "id is",
                            item.id
                          );
                          return item.id == routerProps.match.params.id;
                        })
                      )}

                      {console.log(
                        "hi",
                        routerProps.match.params.id == this.state.articles.id
                      )}
                    </div>
                  );
                }}
              />

              {/* <Route path="/contact/" component={Contact} /> */}

              <Route component={Error404} />
            </Switch>

            {/* footer for all pages */}
            <Footer />
          </div>
          
          
          
          </div>
        
        </Router>

        </div>
    )
    
  }
}

export default App


