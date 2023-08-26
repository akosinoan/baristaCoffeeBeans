
const Story = () =>{

    return(
    <div id="story">
    <section className="bg-light py-5 border-bottom">
        <div className="container px-5 my-5">
            <div className="text-center mb-5">
            <h2 className="fw-bolder">Our Story</h2>
                <p className="lead mb-0"></p>
                </div>
        
        </div>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/story/baristaStory-1.png" className="d-block w-100" alt="..."/>
                </div>
               
                <div className="carousel-item">
                 <img src="/story/baristaStory-2.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                 <img src="/story/baristaStory-3.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                 <img src="/story/baristaStory-4.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                 <img src="/story/baristaStory-5.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                 <img src="/story/baristaStory-6.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                 <img src="/story/baristaStory-7.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                 <img src="/story/baristaStory-8.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                 <img src="/story/baristaStory-9.png" className="d-block w-100" alt="..."/>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </section>
    </div>
    )
}
export default Story;