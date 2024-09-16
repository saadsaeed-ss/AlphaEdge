import React from 'react';
import Navbar from '@/components/Navbar'; // Import the Navbar component


export default function Home() {
  return (
    <>
      <Navbar />  {/* Navbar included here */}
      <main style={{ padding: '20px' }}>
        <h1>Welcome to the Home Page</h1>
        <p>This is the content of the home page.</p>
      </main>
    </>
  );
}
