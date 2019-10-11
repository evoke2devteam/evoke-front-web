import Header from './Header';
import Footer from './Footer';
import React, {Component} from 'react';

class Layout extends Component {

    render() {
        return (
            <div class="generalContainer">
                <Header />
                <div class="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default (Layout);
