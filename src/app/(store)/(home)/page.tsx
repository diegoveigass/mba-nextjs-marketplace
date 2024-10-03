import { api } from '@/data/api'
import type { Product } from '@/data/types/product'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [hightlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[760px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${hightlightedProduct.slug}`}
        className="group col-span-6 relative row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          alt=""
          src={hightlightedProduct.image}
          width={860}
          height={860}
          quality={100}
        />

        <div className="absolute bottom-24 right-24 h-12 flex items-center gap-2 max-w-[350px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate flex-1">
            {hightlightedProduct.title}
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {hightlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>
      {otherProducts.map(product => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
          >
            <Image
              className="group-hover:scale-105 transition-transform duration-500"
              alt=""
              src={product.image}
              width={860}
              height={860}
              quality={100}
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[350px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate flex-1">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
