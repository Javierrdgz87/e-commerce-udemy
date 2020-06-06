import React, { useEffect } from 'react';
import TopMenu from './components/TopMenu'
import useFetch from './hooks/useFetch'
import { URL_API, URL_JSON } from './utils/constants'

function App() {
  const result = useFetch(URL_API)
  console.log(result);
  
  return (
    <div>
      <TopMenu />
    </div>
  );
}

export default App;
