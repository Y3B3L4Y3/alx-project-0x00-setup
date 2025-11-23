import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Buttton';

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center space-y-3">
      <h1 className="text-2xl font-semibold">Landing Page</h1>

      {/* Card component */}
      <Card />

      {/* Small Buttons */}
      <Button title="Small Rounded Sm" styles="rounded-sm text-sm" />
      <Button title="Small Rounded Md" styles="rounded-md text-sm" />
      <Button title="Small Rounded Full" styles="rounded-full text-sm" />

      {/* Medium Buttons */}
      <Button title="Medium Rounded Sm" styles="rounded-sm text-base" />
      <Button title="Medium Rounded Md" styles="rounded-md text-base" />
      <Button title="Medium Rounded Full" styles="rounded-full text-base" />

      {/* Large Buttons */}
      <Button title="Large Rounded Sm" styles="rounded-sm text-lg" />
      <Button title="Large Rounded Md" styles="rounded-md text-lg" />
      <Button title="Large Rounded Full" styles="rounded-full text-lg" />
    </main>
  );
};

export default Landing;
