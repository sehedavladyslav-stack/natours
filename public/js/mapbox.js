/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic3ZsYWRzIiwiYSI6ImNtaW92eHpvcjAxMXgzZXBqd3FlbGRmdWQifQ.G7RUtaiYVGvnQW9yIyNuAw';

  const fixPopupAccessibility = () => {
    document
      .querySelectorAll('.mapboxgl-popup-close-button')
      .forEach((btn) => btn.removeAttribute('aria-hidden'));
  };

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    // style: 'mapbox://styles/svlads/cmiownh3a00ws01qt726p6v5t',
    scrollZoom: false,
    zoom: 10,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
      closeButton: true,
      closeOnClick: false,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  fixPopupAccessibility();

  map.on('load', () => {
    fixPopupAccessibility();

    const observer = new MutationObserver(fixPopupAccessibility);
    observer.observe(document.body, { childList: true, subtree: true });

    // mapboxgl.setTelemetryDisabled(true);

    if (!bounds.isEmpty()) {
      map.fitBounds(bounds, {
        padding: {
          top: 200,
          bottom: 150,
          left: 100,
          right: 100,
        },
        maxZoom: 15,
        duration: 1500,
      });
    }
  });
};
