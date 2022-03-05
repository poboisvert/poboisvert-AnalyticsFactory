import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Router from 'next/router';

function useRequireAuth() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
    if (!session) {
      Router.push('/login');
    }
  }, [session]);

  return session;
}
export default useRequireAuth;
