import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.png';


const navbar = (
  <header>
  <div class="container">
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="http://localhost:3000/">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="http://localhost:1337/rent/paginate">Search </a>
      </div>
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="http://localhost:1337/user/login" id='login'>Login</a>
      </div>
    </div>
  </nav>
  </div>
  </header>
);

const highlight = (
  <section id="hightlight">
  <div class="jumbotron">
    <div class="container">
      <div class="col-md-12">
        <h1 class="display-4">Real Estate Rental System</h1>
        <p class="lead">Real Estate Rental Management System is a web-based system to facilitate flatshare and
        finding roommates.
        </p>
      </div>
    </div>
  </div>
  </section>
);

const content = (
  <section id="content">
  <div class="container">
  <div class="row">
    <div id="div01" class="card col-12 col-sm-12 col-lg-6 col-xl-6">
      <h5 id="title"><a href="http://localhost:1337/rent/details/1">半山自住品味靚裝-三房兩廁-中高層開揚景觀</a></h5>
      <div class=" row">
        <div class="col-12 col-sm-6 col-lg-6 col-xl-6" id="img"> <img class="img-fluid img-thumbnail" alt="Connection timed out"
          src="https://i1.28hse.com/2019/09/938689_2019094721.jpg" value="cover" /></div>
        <div class="col-12 col-sm-6 col-lg-6 col-xl-6" id="div1">
          <ul class="list-group">
            <li class="list-group-item"><label>
              <h5><i class="fas fa-home" ></i> Estate: </h5>
            </label> Robinson Heights</li>
            <li class="list-group-item"><label>
              <h5><i class="fas fa-th"></i> Gross Area: </h5>
            </label> 899 sq feet</li>
            <li class="list-group-item"><label>
              <h5><i class="fas fa-hand-holding-usd"></i> Rent: </h5>
            </label> $43000</li>
          </ul>
        </div>
      </div>
    </div>

    <div id="div02" class="card col-12 col-sm-12 col-lg-6 col-xl-6">
      <h5 id="title"><a href="http://localhost:1337/rent/details/2">銅鑼灣2房2廳。即租即住。優質罕盤。</a></h5>
      <div class=" row">
        <div class=" col-12 col-sm-6 col-lg-6 col-xl-6"  id="img"> <img class="img-fluid img-thumbnail" alt="Connection timed out"
          src="https://i1.28hse.com/2019/10/951089_2019104698.jpg" value="cover"/></div>
        <div class="col-12 col-sm-6 col-lg-6 col-xl-6" id="div1">
          <ul class="list-group">
            <li class="list-group-item"><label>
              <h5><i class="fas fa-home" ></i> Estate: </h5>
            </label> Robinson Heights</li>
            <li class="list-group-item"><label>
              <h5><i class="fas fa-th"></i> Gross Area: </h5>
            </label> 899 sq feet</li>
            <li class="list-group-item"><label>
              <h5><i class="fas fa-hand-holding-usd"></i> Rent: </h5>
            </label> $43000</li>
          </ul>
        </div>
      </div>
    </div>

    <div id="div03" class="card col-12 col-sm-12 col-lg-6 col-xl-6">
      <h5 id="title"><a href="http://localhost:1337/rent/details/3">形品星寓。3分鐘到地鐵站</a></h5>
      <div class=" row">
        <div class=" col-12 col-sm-6 col-lg-6 col-xl-6"  id="img"> <img class="img-fluid img-thumbnail" alt="Connection timed out"
          src="https://i1.28hse.com/2019/09/930790_2019095031.jpg" value="cover" /></div>
        <div class="col-12 col-sm-6 col-lg-6 col-xl-6" id="div1">
          <ul class="list-group">
            <li class="list-group-item"><label>
              <h5><i class="fas fa-home" ></i> Estate: </h5>
            </label> Lime Stardom</li>
            <li class="list-group-item"><label>
              <h5><i class="fas fa-th"></i> Gross Area: </h5>
            </label> 390 sq feet</li>
            <li class="list-group-item"><label>
              <h5><i class="fas fa-hand-holding-usd"></i> Rent: </h5>
            </label> $19000</li>
          </ul>
        </div>
      </div>
    </div>

    <div id="div04" class="card col-12 col-sm-12 col-lg-6 col-xl-6">
      <h5 id="title"><a href="http://localhost:1337/rent/details/1">中上環服務式住宅 2分鐘到地鐵</a></h5>
      <div class=" row">
        <div class=" col-12 col-sm-6 col-lg-6 col-xl-6"  id="img"> <img class="img-fluid img-thumbnail" alt="Connection timed out"
          src="https://i1.28hse.com/2019/10/955789_2019101877.jpg" value="cover"/></div>
        <div class="col-12 col-sm-6 col-lg-6 col-xl-6" id="div1">
          <ul class="list-group">
            <li class="list-group-item"><label>
              <h5><i class="fas fa-home" ></i> Estate: </h5>
            </label> AKVO Hotel</li>
            <li class="list-group-item"><label>
              <h5><i class="fas fa-th"></i> Gross Area: </h5>
            </label> 605 sq feet</li>
            <li class="list-group-item"><label>
              <h5><i class="fas fa-hand-holding-usd"></i> Rent: </h5>
            </label> $35000</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  </section>
);

const footer = (
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4 text-left" style={{padding: 0}}>
        <img src={logo}></img>
        <p class="lead">Simple and easy-to-use system can find roommates for you.
        </p>
        </div>
        <div class="col-md-4 text-left">
          <h5 id="links">Links</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Search</a></li>
          </ul>
          <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
          </ul>
          </div>
        <div class="col-md-4 text-left">
          <h5>Contact Me</h5>
          <p>香港九龍塘窩打老道224號<br></br>
            Phone: (852) 9047-3975<br></br>
            E-Mail: <a href="mailto:19413238@life.hkbu.edu.hk">19413238@life.hkbu.edu.hk</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

ReactDOM.render(navbar, document.getElementById('navbar'));
ReactDOM.render(highlight, document.getElementById('highlight'));
ReactDOM.render(content, document.getElementById('content'));
ReactDOM.render(footer, document.getElementById('footer'));








// const posts = [
//   { id: 1, title: "半山自住品味靚裝-三房兩廁-中高層開揚景觀", estate: "Robinson Heights", purl: "https://i1.28hse.com/2019/09/938689_2019094721.jpg", lurl: "http://localhost:1337/rent/details/1", did:"div01", bedroom: 3, area: 899, tenant: 5, rent: 43000, property: "dummy", map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.2794683&lng=114.1533675&zoom=17&markerLat=22.2794683&markerLng=114.1533675&markerTitle=Robinson%20Heights&locate=true" },
//   { id: 2, title: "銅鑼灣2房2廳。即租即住。優質罕盤", estate: "Hoi deen Court", purl: "https://i1.28hse.com/2019/10/951089_2019104698.jpg", lurl: "http://localhost:1337/rent/details/2", did:"div02", bedroom: 2, area: 700, tenant: 3, rent: 26500, property: "dummy", map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.2818462&lng=114.1836251&zoom=17&markerLat=22.2818462&markerLng=114.1836251&markerTitle=Hoi%20deen%20Court&locate=true" },
//   { id: 3, title: "形品星寓。3分鐘到地鐵站", estate: "Lime Stardom", purl: "https://i1.28hse.com/2019/09/930790_2019095031.jpg", lurl: "http://localhost:1337/rent/details/3", did:"div03", bedroom: 1, area: 390, tenant: 2, rent: 19000, property: "dummy", map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.3212966&lng=114.16478&zoom=17&markerLat=22.3212966&markerLng=114.16478&markerTitle=Lime%20Stardom&locate=true" },
//   { id: 4, title: "中上環服務式住宅 2分鐘到地鐵", estate: "AKVO Hotel", purl: " https://i1.28hse.com/2019/10/955789_2019101877.jpg", lurl: "http://localhost:1337/rent/details/4", did:"div04", bedroom: 1, area: 605, tenant: 2, rent: 35000, property: "dummy", map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.2849974&lng=114.1513049&zoom=17&markerLat=22.2849974&markerLng=114.1513049&markerTitle=AKVO%20Hotel&locate=true" }
// ];

// function Housing(props) {
//   const content = props.posts.map((post) =>
//       <div key={post.id} class="card col-12 col-sm-12 col-lg-6 col-xl-6 row" id={post.did}>
//         <h5><a href={post.lurl}>{post.title}</a></h5>
//         <div class="row">
//           <div class=" col-12 col-sm-6 col-lg-6 col-xl-6" > <img class="img-fluid img-thumbnail" src={post.purl} value="cover" width="350" alt=""
//             height="350" /></div>
//           <div class="col-12 col-sm-6 col-lg-6 col-xl-6" id="div1">
//             <ul class="list-group">
//               <li class="list-group-item"><label><h5>Estate:</h5></label> {post.estate}</li>
//               <li class="list-group-item"><label><h5>Gross Area:</h5></label> {post.area} sq feet</li>
//               <li class="list-group-item"><label><h5>Rent:</h5></label> ${post.rent}</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//   );
//   return (
//     <div>
//       {content}
//     </div>
//   );
// }

// ReactDOM.render(<Housing posts={posts} />, document.getElementById('content'));