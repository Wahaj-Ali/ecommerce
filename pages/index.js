import React from 'react';
import { Product, HeroBanner, Footer, Navbar, FooterBanner, Cart, Layout } from '@/components';
import { client } from '@/lib/client';

const Home = ({ products, bannerData }) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    {console.log(bannerData)}
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Shoes of your Choice, Comfortable and Elegant Looking!</p>
    </div>

    <div className='products-container'>
      {products?.map((product) => 
        product.name
      )}
    </div>

    <Footer />
    </>
  )
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home