'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap';

export default function Template({ children }) {
  
  const pathname = usePathname();

  useEffect(() => {
      gsap.to('.page-transition', {
        opacity: 0,
        duration: 2,
        ease: 'power2.inOut',
      });

      gsap.to('.page-transition', {
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
      });

  }, [pathname]);

  return <div className="page-transition">{children}</div>;
}
