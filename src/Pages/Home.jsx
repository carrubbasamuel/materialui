import React from 'react';
import ModalCart from '../Components/Cart';
import Griglia from '../Components/Griglia';
import Navbar from '../Components/Navbar';
import Header from '../Components/Paper';
import Layout from '../Layout';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Header />
      <Griglia />
    </Layout>
  );
}
