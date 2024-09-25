import React from 'react';

import HeroSection from './home/heroSec';
import ToolsSec from './home/toolsSec';
import StartupSec from './home/startup';
import TestioMonials from './home/testimonial';
import TeamSec from './home/team';
import WorkWithUs from './home/workWithUs';



export default function Home() {
  return (
    <>
      <HeroSection/>
      <ToolsSec/>
      <StartupSec/>
      <TestioMonials/>
      <TeamSec/>
      <WorkWithUs/>
      
    </>
  );
} 