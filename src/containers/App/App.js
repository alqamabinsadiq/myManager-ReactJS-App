import React from 'react';
import Navigation from '../Navigation/Navigation';
const App = () => {
    return (
        <div>
            <Navigation />
            <div className="mainContentBody">
                <div>
                    <div id="gtco-header" className="gtco-cover" role="banner">
                        <div className="overlay"></div>
                        <div className="gtco-container">
                            <div className="row">
                                <div className="col-md-12 col-md-offset-0 text-left">
                                    <div className="row row-mt-15em">
                                        <div className="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
                                            <span className="intro-text-small">Welcome to MyManager.</span>
                                            <h1>Providing easy way to manage your Life.</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
