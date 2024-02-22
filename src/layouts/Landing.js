import React from "react";
import "./styles/style.css";
import "./styles/styles.css";
import "./styles/vendor.css";
import './styles/icomoon.css';
import './styles/cryptofont.min.css';
import './styles/bootstrap.min.css';
import './styles/swiper-bundle.min.css';
import { ConnectWallet } from "@thirdweb-dev/react";
import { Base } from "@thirdweb-dev/chains";

function LandingLayout() {
    const disableLink = (event) => {
        event.preventDefault();
    };

    document.querySelector('#root').style.height = '100%'
    document.querySelector('body').style.height = '100%'
    document.querySelector('html').style.height = '100%'
    document.querySelector('body').classList.add('homepage', 'bg-dark', 'text-white')

    const cawtokenbalance = {
        1: "0xf3b9569F82B18aEf890De263B84189bd33EBe452",
        [Base.chainId]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    };

    return (
        <>
            {/* <body className="homepage bg-dark text-white" style={{ height: "100%" }}> */}
            <nav className="navbar navbar-expand-lg container-fluid p-4 ">
                <div className="container-fluid">
                    <div className="main-logo">
                        <a href="index.html">
                            <img src="images/cawlogo.png" alt="logo" style={{ width: "40%" }} />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar">
                        <iconify-icon icon="system-uicons:menu-hamburger" className="hamburger-menu"></iconify-icon>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body justify-content-lg-between">
                            <div className="main-menu text-center d-lg-flex align-items-center ">
                                <ul className="menu-list list-unstyled d-lg-flex content-light m-0">
                                    <li className="menu-item text-uppercase">
                                        <a className="fw-bold" href="index.html">Home</a>
                                    </li>
                                    <li className="menu-item text-uppercase">
                                        <a className="fw-bold" href="invest.html">Contact Us</a>
                                    </li>
                                    <li className="menu-item text-uppercase">
                                        <a className="fw-bold" href="blog.html">About Us</a>
                                    </li>
                                    <li className="menu-item text-uppercase">
                                        <a className="fw-bold" href="blog.html">Dashboard</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-wrap d-md-flex">
                                <ConnectWallet style={{}}
                                    theme={"dark"}
                                    switchToActiveChain={true}
                                    modalSize={"wide"}
                                    hideTestnetFaucet={true}
                                    className="ConnectButton-margin"
                                    auth={{ loginOptional: false }}
                                    displayBalanceToken={cawtokenbalance}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="notification-bar col-md-15 container border-rounded-10" id="MetaMask-Install-Notice">
                <div className="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12" y2="16" />
                    </svg>

                </div>
                <div className="message-container">
                    <p>Until the completion of our artificial intelligence system. The service is currently free, but this is not
                        always the case.</p>
                </div>
                <div className="close-container">
                    <i className="fas fa-times"></i>
                </div>
            </div>


            <div id="billboard" className="padding-medium overflow-hidden">
                <div className="container">
                    <div className="row d-flex flex-wrap">
                        <div className="col-md-5">
                            <div className="image-holder border-set-bold border-rounded-circle">
                                <img src="images/banner-image.png" alt="banner" className="banner-image" />
                            </div>
                        </div>
                        <div className="col-md-7" style={{ justifyContent: "center", alignItems: "center", display: "flex" }} >
                            <div className="banner-content content-light m-5">
                                <h1 className="banner-title display-3">
                                    <a className="CAWTAG" onClick={(e) => disableLink(e)}>$CAW</a> Investment
                                </h1>
                                <p style={{ marginBottom: "2%" }}>You can make a big investment by safely investing in our platform using <a
                                    className="CAWTAG" onClick={(e) => disableLink(e)}>$CAW</a> token with AI. You can also
                                    make more profit from our tools!</p>
                                <div className="btn-wrap" style={{ display: "flex", gap: "2.5%" }}>
                                    <a href="#" className="btn btn-outline-accent btn-medium btn-rounded btn-medium text-uppercase"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal">How Does IT WORK</a>
                                    <a href="/dashboard" className="btn btn-outline-accent btn-medium btn-rounded btn-medium text-uppercase">dashboard</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer-bottom">
                <div className="container">
                    <div className="row text-center">
                        <p>© 2024 CAW. All Rights Reserved <a href="#" className="light">CoinJourney.</a></p>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 style={{ color: "#333", textAlign: "center", margin: "auto"}}>How our platform works</h1>
                        </div>
                        <div className="modal-body">
                            <div className="tabs-listing mt-4">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="nav-sign-in" role="tabpanel"
                                        aria-labelledby="nav-sign-in-tab">
                                        <p className="hopw-p">Coin Journey is a fully automated <a className="CAWTAG"
                                            onClick={(e) => disableLink(e)}>$CAW</a> investment platform operating with no human intervention.
                                            Take full advantage of our fast and legit quest platform. Our automated system gathers
                                            information from the blockchain transfers and cryptocurrency exchanges to study and predict
                                            the <a className="CAWTAG" onClick={(e) => disableLink(e)}>$CAW</a> price. Our servers open and close
                                            thousands of transactions per minute, analyzing the price difference and transaction fees,
                                            and use that information to your invest. Our data centers are located on multiple locations
                                            around the world so that our system has 99.9% uptime guaranteed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* </body> */}
        </>
    );
}

export default LandingLayout;
