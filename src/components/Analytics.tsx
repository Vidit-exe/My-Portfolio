'use client';

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.nepcha.com/js/nepcha-analytics.js";
    script.defer = true;
    script.setAttribute("data-site", "YOUR_DOMAIN_HERE");
    document.body.appendChild(script);
  }, []);

  return null;
}
