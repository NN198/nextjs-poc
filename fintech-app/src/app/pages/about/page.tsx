"use client"
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
const About: NextPage = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <span> 
      <div onClick={() => router.push('/')}>Back to homepage</div>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      </span>
      <p>Welcome to the about page!</p>

    </div>
  );
};

export default About;
