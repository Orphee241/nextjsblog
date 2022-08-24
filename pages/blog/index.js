import React from 'react'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default async function handler(
  NextApiRequest,
  NextApiResponse
){
  const prisma = new PrismaClient();
  if(NextApiRequest.method === "GET"){
    const articl = await prisma.articles.findMany()
    console.log(articl);
  }else if(NextApiRequest.method === "POST"){

  }
}




