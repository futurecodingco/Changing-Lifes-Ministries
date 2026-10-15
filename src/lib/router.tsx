/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PageRoute } from '../types/index.ts';

interface RouterContextType {
  currentRoute: PageRoute;
  navigate: (route: PageRoute) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentRoute: '/',
  navigate: () => {},
});

function getInitialRoute(): PageRoute {
  // Support pathname or hash
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.replace('#', '').toLowerCase();

  const candidate = (hash || path) as string;

  if (candidate.includes('about')) return '/about';
  if (candidate.includes('program') || candidate.includes('what-we-do')) return '/programs';
  if (candidate.includes('event')) return '/events';
  if (candidate.includes('leader')) return '/leadership';
  if (candidate.includes('contact')) return '/contact';
  if (candidate.includes('donat') || candidate.includes('give') || candidate.includes('banking')) return '/donate';
  if (candidate.includes('tribute') || candidate.includes('memorial') || candidate.includes('jennifer') || candidate.includes('goodbye')) return '/tribute';

  return '/';
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (route: PageRoute) => {
    setCurrentRoute(route);
    try {
      window.history.pushState({}, '', route);
    } catch {
      window.location.hash = route;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: PageRoute;
  children: ReactNode;
  className?: string;
}

export function Link({ to, children, className = '', ...props }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
