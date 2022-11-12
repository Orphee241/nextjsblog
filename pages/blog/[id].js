import React from 'react'

const prisma = new PrismaClient();
 
export async function getStaticPaths() {

    
    let datas = await prisma.articles.findMany() 
  
    datas = JSON.parse(JSON.stringify(datas))
  
    return {
      paths: [{ params: { id: '1' } }],
      fallback: false, // can also be true or 'blocking'
    }
}
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {

    const id = context.params.id
    let datas = await prisma.articles.findMany() 
    datas = JSON.parse(JSON.stringify(datas))
    
    return {
      // Passed to the page component as props
      props: { post: {} },
    }
  }
  
  /* export default function Post({ post }) {
    // Render post...
  } */



export default function post() {
    return (
      <div className="container my-4">
          <h1>Article</h1>
      </div>
    )
  }





