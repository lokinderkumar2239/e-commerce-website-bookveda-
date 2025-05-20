function loadNavbar() {
    const navbarHTML = `
      <header>
          <div class="navbar">
              <div class="nav-logo border">
                  <img src="websitelogo1.png">
              </div>
              <div class="nav-address border">
                  <p class="add-first">Deliver to</p>
                  <div class="add-icon">
                      <i class="fa-solid fa-location-dot"></i>
                      <p class="add-second">India</p>
                  </div>
              </div>
              <div class="nav-search">
                  <select class="search-select">
                      <option>All</option>
                  </select>
                  <input placeholder="Search for Books" class="select-input">
                  <div class="search-icon">
                      <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
              </div>
              <div class="nav-signin border">
                  <a href="login.html" target="_blank"><span>Hello, sign in</span></a>
                  <p class="nav-second">Account & Lists</p>
              </div>
              <div class="nav-signin border">
                  <p><span>Returns</span></p>
                  <p class="nav-second">& Orders</p>
              </div>
              <div class="nav-cart border">
                  <a href="cart2.html" target="_blank">
                      <i class="fa-solid fa-cart-shopping"></i></a>
                  <span>Cart</span>
              </div>
          </div>
          <div class="panel">
              <div class="panel-All">
              <div class="menu-toggle" onclick="toggleSidebar()">
              <i class="fa-solid fa-bars"></i>
          </div>

                      
              </div>
              <div class="panel-ops">
                  <a href="index.html">Home</a>
                  <p>Product Categories</p>
                  <p>Bulk Purchase</p>
                  <p>Return & Replacement</p>
                  <p>Terms & Conditions</p>
                  <p>Customer Service</p>
                  <p>Contact Us</p>
              </div>
              <div class="panel-deals">
                  Shopping deals on Books
              </div>
          </div>
      </header>
    `;

    const navbarCSS = `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
      }
  
      .navbar {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          height: 60px;
          background-color: #0077b6;
          color: white;
          cursor: pointer; 
      }
  
      .nav-logo img {
          height: 200px;
          width: 100px;
          object-fit: cover;
      }
  
      .add-icon {
          display: flex;
          align-items: center;
      }
  
      .add-first {
          color: #f4eeee;
          font-size: 1rem;
          margin-left: 15px;
      }
  
      .add-second {
          margin-left: 5px;
      }
  
      .nav-search {
          display: flex;
          justify-content: space-evenly;
          background-color: #f3f3f3;
          width: 640px;
          height: 40px;
          border-radius: 3px;
      }
  
      .search-select {
          background-color: #f3f3f3;
          width: 50px;
          text-align: center;
          border-radius: 4px 0 0 4px;
          border: none;
      }
  
      .select-input {
          width: 100%;
          font-size: 1rem;
          border: none;
          margin-left: 4px;
      }
  
      .search-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 45px;
          font-size: 1.2rem;
          background-color: #f3a846;
          border-radius: 0 4px 4px 0;
      }
  
      .nav-signin a {
          text-decoration: none;
          color: white;
      }
  
      span {
          font-size: 0.85rem;
      }
  
      .nav-second {
          font-size: 0.9rem;
          font-weight: 700;
      }
  
      .nav-cart i {
          color: white;
          font-size: 30px;
      }
  
      .nav-cart {
          font-size: 0.9rem;
          font-weight: 700;
      }
  
      .panel {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          height: 40px;
          background-color: #f8f9fa;
          color: black;
          padding: 20px 0px;
          border-bottom: 2px solid black;

      }
        .panel-ops a{
    text-decoration: none;
    color: black;
    }
  
      .panel-All i {
          color: black;
      }
  
      .panel-ops {
          width: 70%;
          font-size: 0.9rem;
      }
  
      .panel-ops p {
          display: inline;
          margin-left: 15px;
      }
  
      .panel-deals {
          font-size: 0.95rem;
          font-weight: 600;
      }
    `;


    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    const styleTag = document.createElement("style");
    styleTag.textContent = navbarCSS;
    document.head.appendChild(styleTag);
};




/*  function which add items in cart */

