import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Test2 extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container">
                    <div class="row">
                        <div class="card col-12 col-sm-8 col-lg-8 col-xl-8">
                            <div class="row">
                                <div class="col-6 col-sm-6 col-lg-6 col-xl-6" >
                                    123
                </div>
                                <div class="card col-6 col-sm-6 col-lg-6 col-xl-6">
                                    456
                </div>
                            </div>
                        </div>
                        <div class="card col-12 col-sm-4 col-lg-4 col-xl-4">
                            <form action="/rent/paginate" method="get">
                                <div>
                                    <h1>Property Search</h1>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}