
import Image from 'next/image'
import blogimg from "../public/blog.jpg"

export default function accueil() {
  return (

    <>
    <div className="container justify-content-center my-4">
        <h1>Bienvenu sur mon blog</h1>
        <h4 className='mt-4'>A la une</h4>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div class="card">
                    <Image placeholder="blur" className="card-img-top" alt="Mon blog" width="1200px" height="630px" src={blogimg} />
                    <div className="card-body">
                    <h5 className="card-title">La gestion de projet</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Voir plus</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div class="card">
                    <Image placeholder="blur" className="card-img-top" alt="Mon blog" width="1200px" height="630px" src={blogimg} />
                    <div className="card-body">
                    <h5 className="card-title">La gestion de projet</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Voir plus</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div class="card">
                    <Image placeholder="blur" className="card-img-top" alt="Mon blog" width="1200px" height="630px" src={blogimg} />
                    <div className="card-body">
                    <h5 className="card-title">La gestion de projet</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Voir plus</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div class="card">
                    <Image placeholder="blur" className="card-img-top" alt="Mon blog" width="1200px" height="630px" src={blogimg} />
                    <div className="card-body">
                    <h5 className="card-title">La gestion de projet</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Voir plus</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
    </>
  )
}
