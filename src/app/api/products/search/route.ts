import type { NextRequest } from 'next/server'
import { z } from 'zod'
import data from '../data.json'

export async function GET(request: NextRequest) {
  await new Promise(resolve => setTimeout(resolve, 4500))

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))
  // safeParse valida mas nao dispara erro.
  // parse ele estoura erro.

  const products = data.products.filter(product => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}
