import React from 'react'
import NewCairoBranch from '../components/NewCairoBranch'
import MaadiBranch from '../components/MaadiBranch'
import NasrCityBranch from '../components/NasrCityBranch'
import '../style/branches/_branches.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Branches() {
  return (
      <main>
          <Navbar />
          <h1>Our Branches</h1>
          <NewCairoBranch />
          <MaadiBranch />
          <NasrCityBranch />
          <Footer />
      </main>
  );
}
