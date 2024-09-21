// hooks/useCurrentPath.ts
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useCurrentPath = () => {
  const [path, setPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  return path;
};

export default useCurrentPath;
