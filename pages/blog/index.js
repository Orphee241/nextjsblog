import Image from 'next/image'
import Link from 'next/link';
import { PrismaClient } from '@prisma/client'
import blogimg from "../../public/blog.jpg" 



export default function Articles(props) {
  const d = parseInt(new Date().getTime())
  console.log(typeof(d)); 
 
  return (
    <div className="container">
      <h1>Articles</h1>
      <div className="row">
          {props.datas.map(data =>(
          <div style={{minHeight: 40 + "em"}} className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                <img placeholder="blur" className="card-img-top" alt="Mon blog" width="1200px" height="630px" src="../../public/blog.jpg" />
                <img src="" alt="" />
                <div className="card-body">
                <h5 className="card-title">{data.titre}</h5>
                <p className="card-text">{data.corps}</p>
                <p className="card-text">{data.autheur}</p>
                <p className="card-text"><i className='fab fa-google' ></i>{data.ajoutele.slice(0, 10)}</p>
                <Link href={`/blog/${data.id}`}>
                <a  className="btn btn-primary">Voir plus</a>
                </Link>
                </div>
            </div>
          </div>
          ))}
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const prisma = new PrismaClient();
  let datas = await prisma.articles.findMany() 

  datas = JSON.parse(JSON.stringify(datas))

  return {
    props: {
      datas
    }
  }
}


/* export default async function handler(
  NextApiRequest,
  NextApiResponse
){
  
  if(NextApiRequest.method === "GET"){
    const articl = await prisma.articles.findMany()
    console.log(articl);
  }else if(NextApiRequest.method === "POST"){

  }
} */




