import React from 'react';

import dynamic from "next/dynamic";
// Dynamically import the Navbar component, disabling SSR
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });

import HeroSection from './home/heroSec';
import ToolsSec from './home/toolsSec';
import Footer from '@/components/Footer';
import StartupSec from './home/startup';
import TestioMonials from './home/testimonial';
import TeamSec from './home/team';



export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <ToolsSec/>
      <StartupSec/>
      <TestioMonials/>
      <TeamSec/>
      <Footer/>
      
    </>
  );
} 