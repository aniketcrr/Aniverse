
function Header() {
    return (


        <div className="container text-white mt-2">
            <div className="row">
                <div className="col-12">

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-start" aria-label="Offcanvas navbar large">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">ANIVERSE</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar2"
                                aria-labelledby="offcanvasNavbar2Label">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">ABOUT US</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">CONTACT US</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </div>



    )
}

export default Header;