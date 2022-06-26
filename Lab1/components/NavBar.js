class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand m-lg-1" href="#"><img height="60px" width="70px" src="../images/logo1.jpg"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active fs-3">
                    <a class="nav-link" href="./home.html">Home</a>
                </li>
                <li class="nav-item fs-3">
                    <a class="nav-link" href="./profile.html">Profile</a>
                </li>
                <li class="nav-item fs-3">
                    <a class="nav-link" href="./about.html">About</a>
                </li>
                <li class="nav-item fs-3">
                    <a class="nav-link" href="./registration.html">Registration</a>
                </li>
                
            </ul> 
            <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                        </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
            </div
        </div>
        
        <div class= "text-right px-4" >
            <button type="button" class="btn btn-primary position-relative bg-warning">
                Inbox
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
                </span>
            </button>
        </div
    </nav>


        `
    }
}

customElements.define('main-header', NavBar);