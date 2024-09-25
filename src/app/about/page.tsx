import React from 'react';

import HeroSection from './heroSec';
import Mission from './mission';
import TeamSec from '../home/team';
import PartnerSec from './partner';



export default function About() {
  return (
    <>
      <HeroSection/>
      <Mission/>
      <TeamSec/>
      <PartnerSec/>
    </>
  );
} 