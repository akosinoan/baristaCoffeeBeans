import img from "next/image";
const Contact = () =>{

    return(
        <div id="contact">
    <section className="py-5 border-bottom">
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder">Contact</h2>
                    <p className="lead mb-0">You can reach us thru</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        
                        <div className="card mb-4">
                        <a className="text-muted" target="_blank" href="https://instagram.com/baristacoffeebeans">
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                    <img alt="ig logo" width={50}height={50} src="/IG_logo.png"/></div>
                                    <div className="ms-4">
                                        <div className="mb-1 small text-muted"> Instagram</div>
                                       
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>

                        <div className="card mb-4">
                        <a className="text-muted" target="_blank" href="https://facebook.com/TheBaristaCoffeeBeans">
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                    <img alt="fb logo" width={50}height={50} src="/fb-icon.png"></img></div>
                                    <div className="ms-4">
                                        <div className="mb-1 small text-muted">Facebook</div>
                                        
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="card mb-4">
                            <a className="text-muted" target="_blank" href="https://shopee.ph/baristacoffeebeans">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                        <img alt="shopee logo" width={50}height={50} src="/Shopee_logo.png"></img></div>
                                        <div className="ms-4">
                                            <div className="mb-1 small text-muted"> Shopee</div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="card mb-4">
                            <a className="text-muted" target="_blank" href="mailto:baristacoffeebeans@gmail.com">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                        <img alt="gmail logo" width={109}height={50} src="/gmail_logo.png"></img></div>
                                        <div className="ms-4">
                                            
                                        </div>
                                    </div>
                                    <div className="mb-1 small text-muted" >baristacoffeebeans@gmail.com </div>
                                        
                                </div>
                            </a>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
export default Contact;