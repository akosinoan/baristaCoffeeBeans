import Link from "next/link";

const Header = () =>{

    return(
      <header className="bg-dark py-5 mt-5" id="header">
      <div className="container px-5">
          <div className="row gx-5 justify-content-center">
              <div className="col-lg-6">
                  <div className="text-center my-5">
                      
                      <h1 className="display-5 fw-bolder text-white mb-2">Barista Coffee Beans</h1>
                      <p className="lead text-white-50 mb-4"><em>Professionally curated by coffee experts</em></p>
                      
                  </div>
              </div>
          </div>
      </div>
  </header>
    )
}
export default Header;