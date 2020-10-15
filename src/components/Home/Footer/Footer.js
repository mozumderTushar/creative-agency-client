import React from 'react';

const Footer = () => {
    return (
        <footer className="clear-both mt-5" style={{ backgroundColor: '#FBD062', height: 'auto', marginBottom: '0px' }}>
            <div className="container pt-5 pb-4" >
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2>Let us handle your <br /> project, professionally.</h2>
                        <p><small>With well written codes, we build amazing apps for all<br /> platforms, mobile and web apps in general.</small></p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your name / company’s name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-design mb-5">Submit</button>
                        </form>

                    </div>
                </div>
                <p className="text-center mt-5"> copyright Orange labs {(new Date()).getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;