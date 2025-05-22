import React from 'react';
import TimeDisplay from './TimeDisplay';
import { TimeHero, TimeHero2 } from '../data/Time';

const StaticTimers = () => (
  <section className="py-8 space-y-8">
    <div>
      <h2 className="text-2xl font-semibold mb-4">Hero Section Timer</h2>
      <TimeDisplay data={TimeHero} />
    </div>
    <div>
      <h2 className="text-2xl font-semibold mb-4">Secondary Section Timer</h2>
      <TimeDisplay data={TimeHero2} />
    </div>
  </section>
);

export default StaticTimers;
