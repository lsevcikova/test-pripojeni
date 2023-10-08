import React, { useEffect, useState } from 'react'

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false)
      console.log('Offline event detected')
    }

    const handleOnline = () => {
      setIsOnline(true)
      console.log('Online event detected')
    }

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    console.log('Component mounted');

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
      console.log('Component unmounted');
    };

  }, []);

  if (isOnline) {
    return <p>Všechno v pořádku</p>
  }

  return <p>Jste offline!</p>
}

export default Offline
