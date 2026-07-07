export const captureUTMs = () => {
  // Prevent overwriting original attribution if already set for the session
  if (sessionStorage.getItem('attribution_captured')) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const referrer = document.referrer;
  const currentUrl = window.location.href;

  // Capture UTMs
  const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  let hasUTMs = false;
  utms.forEach(param => {
    if (params.has(param)) {
      sessionStorage.setItem(param, params.get(param));
      hasUTMs = true;
    }
  });

  // Capture Click IDs
  const clickIds = ['gclid', 'fbclid', 'msclkid'];
  let hasClickIds = false;
  clickIds.forEach(id => {
    if (params.has(id)) {
      sessionStorage.setItem(id, params.get(id));
      hasClickIds = true;
    }
  });

  // Determine Traffic Source
  let trafficSource = 'Unknown';
  if (hasUTMs) {
    trafficSource = 'Campaign';
  } else if (hasClickIds) {
    if (params.has('gclid')) trafficSource = 'Google Ads';
    else if (params.has('fbclid')) trafficSource = 'Facebook Ads';
    else if (params.has('msclkid')) trafficSource = 'Bing Ads';
  } else if (referrer) {
    const ref = referrer.toLowerCase();
    if (ref.includes('google.')) trafficSource = 'Google Organic';
    else if (ref.includes('bing.')) trafficSource = 'Bing Organic';
    else if (ref.includes('facebook.com') || ref.includes('instagram.com')) trafficSource = 'Social Referral';
    else if (ref.includes('linkedin.com')) trafficSource = 'LinkedIn Referral';
    else trafficSource = 'Referral';
  } else {
    trafficSource = 'Direct';
  }

  sessionStorage.setItem('traffic_source', trafficSource);
  sessionStorage.setItem('landing_page', currentUrl);
  sessionStorage.setItem('document_referrer', referrer || 'None');
  sessionStorage.setItem('first_visit_time', new Date().toISOString());
  sessionStorage.setItem('attribution_captured', 'true');

  if (localStorage.getItem('DEBUG_ATTRIBUTION')) {
    console.log('Attribution Captured:', {
      trafficSource,
      landingPage: currentUrl,
      referrer: referrer || 'None',
      timestamp: sessionStorage.getItem('first_visit_time'),
      utms: {
        source: sessionStorage.getItem('utm_source'),
        medium: sessionStorage.getItem('utm_medium'),
        campaign: sessionStorage.getItem('utm_campaign'),
        term: sessionStorage.getItem('utm_term'),
        content: sessionStorage.getItem('utm_content'),
      },
      clickIds: {
        gclid: sessionStorage.getItem('gclid'),
        fbclid: sessionStorage.getItem('fbclid'),
        msclkid: sessionStorage.getItem('msclkid'),
      }
    });
  }
};

export const getUTMs = () => {
  return {
    traffic_source: sessionStorage.getItem('traffic_source') || 'Unknown',
    landing_page: sessionStorage.getItem('landing_page') || 'Unknown',
    referrer: sessionStorage.getItem('document_referrer') || 'Unknown',
    timestamp: sessionStorage.getItem('first_visit_time') || new Date().toISOString(),
    current_page: window.location.href,
    utm_source: sessionStorage.getItem('utm_source') || '',
    utm_medium: sessionStorage.getItem('utm_medium') || '',
    utm_campaign: sessionStorage.getItem('utm_campaign') || '',
    utm_term: sessionStorage.getItem('utm_term') || '',
    utm_content: sessionStorage.getItem('utm_content') || '',
    gclid: sessionStorage.getItem('gclid') || '',
    fbclid: sessionStorage.getItem('fbclid') || '',
    msclkid: sessionStorage.getItem('msclkid') || '',
  };
};
