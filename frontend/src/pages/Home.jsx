import React from 'react'
import { Header } from '../components/Header'
import { Speciality } from '../components/Speciality'
import { Top_Doctors } from '../components/Top_Doctors'
import { Banner } from '../components/Banner'

export const Home = () => {
  return (
    <div>
      <Header></Header>
      <Speciality></Speciality>
      <Top_Doctors></Top_Doctors>
      <Banner></Banner>
    </div>
  )
}
