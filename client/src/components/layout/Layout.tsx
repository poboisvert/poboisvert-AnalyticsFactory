import * as React from 'react';

import useRequireAuth from '@/utils/useRequireAuth';
import Loader from '@/components/loader';

export default function Layout({ children }: { children: React.ReactNode }) {
  const session = useRequireAuth();
  if (!session) return <Loader />;
  // Put Header or Footer Here
  return <>{children}</>;
}
