import React from 'react';

import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import WorldClock from './components/worldClock/worldClock';
import ListCounters from './components/countDown/listCounters';

const queryClient = new QueryClient();

export default function App() {
  
  return (
    <QueryClientProvider client={queryClient} >
      <div className='app-wrapper'>
        <ListCounters />
        <WorldClock />
      </div>
    </QueryClientProvider>
  );
}
