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

  // Determine Traffic Source, Medium, and Type
  let trafficSource = 'Unknown';
  let trafficMedium = 'Unknown';
  let trafficType = 'Unknown';

  const uSource = (params.get('utm_source') || '').toLowerCase();
  const uMedium = (params.get('utm_medium') || '').toLowerCase();
  const ref = referrer ? referrer.toLowerCase() : '';

  if (uSource === 'google' && (uMedium === 'cpc' || params.has('gclid')) || params.has('gclid')) {
    trafficSource = 'Google';
    trafficMedium = 'Paid Search';
    trafficType = 'Google Ads';
  } else if (uSource === 'facebook' && (uMedium === 'paid_social' || params.has('fbclid')) || params.has('fbclid')) {
    trafficSource = 'Facebook';
    trafficMedium = 'Paid Social';
    trafficType = 'Facebook Ads';
  } else if (uSource === 'instagram' && uMedium === 'paid_social') {
    trafficSource = 'Instagram';
    trafficMedium = 'Paid Social';
    trafficType = 'Instagram Ads';
  } else if (uSource === 'linkedin' && uMedium === 'cpc') {
    trafficSource = 'LinkedIn';
    trafficMedium = 'Paid Social';
    trafficType = 'LinkedIn Ads';
  } else if (hasUTMs) {
    trafficSource = params.get('utm_source') || 'Unknown';
    trafficMedium = params.get('utm_medium') || 'Unknown';
    trafficType = 'Custom Campaign';
  } else if (ref) {
    if (ref.includes('google.')) {
      trafficSource = 'Google';
      trafficMedium = 'Organic Search';
      trafficType = 'Google Organic';
    } else if (ref.includes('bing.')) {
      trafficSource = 'Bing';
      trafficMedium = 'Organic Search';
      trafficType = 'Bing Organic';
    } else if (ref.includes('facebook.com') || ref.includes('instagram.com') || ref.includes('t.co') || ref.includes('twitter.com') || ref.includes('linkedin.com')) {
      trafficSource = ref.includes('facebook') ? 'Facebook' : ref.includes('instagram') ? 'Instagram' : ref.includes('linkedin') ? 'LinkedIn' : 'Social';
      trafficMedium = 'Referral';
      trafficType = 'Social Referral';
    } else {
      try {
        const url = new URL(ref);
        trafficSource = url.hostname;
      } catch (e) {
        trafficSource = ref;
      }
      trafficMedium = 'Referral';
      trafficType = 'Referral';
    }
  } else {
    trafficSource = 'Direct';
    trafficMedium = 'Direct';
    trafficType = 'Direct Visit';
  }

  sessionStorage.setItem('traffic_source', trafficSource);
  sessionStorage.setItem('traffic_medium', trafficMedium);
  sessionStorage.setItem('traffic_type', trafficType);
  sessionStorage.setItem('landing_page', currentUrl);
  sessionStorage.setItem('document_referrer', referrer || 'None');
  sessionStorage.setItem('first_visit_time', new Date().toISOString());
  sessionStorage.setItem('attribution_captured', 'true');

  if (localStorage.getItem('DEBUG_ATTRIBUTION')) {
    console.log('Attribution Captured:', {
      trafficSource,
      trafficMedium,
      trafficType,
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
    traffic_medium: sessionStorage.getItem('traffic_medium') || 'Unknown',
    traffic_type: sessionStorage.getItem('traffic_type') || 'Unknown',
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
