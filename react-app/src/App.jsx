import React from 'react';
import Header from './Header'
import Footer from './Footer'
import "./css/App.scss";


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('/rent/jhome')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          items: data
        })
      })
  }

  render() {
    const { items } = this.state
    return (
      <div>
        <Header />
          {
            items.length > 0 ?
            <section>
              <div class="container">
                <div class="row">
                  {
                    items.map((element) => {
                      return (
                        <div id="div01" class="card col-12 col-sm-12 col-lg-6 col-xl-6">
                          <h5 id="title"><a href="http://localhost:1337/rent/details/">{element.title}</a></h5>
                          <div class=" row">
                            <div class="col-12 col-sm-6 col-lg-6 col-xl-6" id="img"> <img class="img-fluid img-thumbnail" alt="Connection timed out"
                              src={element.url} value="cover" /></div>
                            <div class="col-12 col-sm-6 col-lg-6 col-xl-6" id="div1">
                              <ul class="list-group">
                                <li class="list-group-item"><label>
                                  <h5><i class="fas fa-home" ></i> Estate: </h5>
                                </label> {element.estate}</li>
                                <li class="list-group-item"><label>
                                  <h5><i class="fas fa-th"></i> Gross Area: </h5>
                                </label> {element.area} sq feet</li>
                                <li class="list-group-item"><label>
                                  <h5><i class="fas fa-hand-holding-usd"></i> Rent: </h5>
                                </label> ${element.rent}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>
            : <div>wait</div>
          }
        <Footer />
      </div>

    )
  }
}




{/* {
  items.length > 0 ?
  <ul>
      {
        items.map((element,index)=>{
        return <li key={index}>{element.title}</li>
        })
      }
  </ul>
  :<div>wait</div>
} */}