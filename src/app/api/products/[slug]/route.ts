import { z } from 'zod'
import data from '../data.json'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  await new Promise(resolve => setTimeout(resolve, 1500))

  const slug = z.string().parse(params.slug)

  // safeParse valida mas nao dispara erro.
  // parse ele estoura erro.

  const product = data.products.find(product => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 400 })
  }

  return Response.json(product)
}
