import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

export function DholeraMap() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const map = L.map(el, { scrollWheelZoom: false, attributionControl: false }).setView([22.4933, 72.2917], 13);

    L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      maxZoom: 20,
    }).addTo(map);

    function kmlColor(str) {
      const c = (str || '').trim().padStart(8, 'f');
      const a = parseInt(c.slice(0, 2), 16) / 255;
      const b = parseInt(c.slice(2, 4), 16);
      const g = parseInt(c.slice(4, 6), 16);
      const r = parseInt(c.slice(6, 8), 16);
      return {
        hex: `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`,
        alpha: a,
      };
    }

    function parseCoords(str) {
      return (str || '').trim().split(/\s+/).reduce((acc, pt) => {
        const [lng, lat] = pt.split(',').map(Number);
        if (!Number.isNaN(lat) && !Number.isNaN(lng)) acc.push([lat, lng]);
        return acc;
      }, []);
    }

    const ac = new AbortController();
    fetch('/map2.kml', { signal: ac.signal })
      .then((r) => r.text())
      .then((text) => {
        const xml = new DOMParser().parseFromString(text, 'text/xml');

        const styles = {};
        xml.querySelectorAll('Style[id]').forEach((s) => {
          const fillEl = s.querySelector('PolyStyle > color');
          const strokeEl = s.querySelector('LineStyle > color');
          const widthEl = s.querySelector('LineStyle > width');
          const fill = kmlColor(fillEl ? fillEl.textContent : 'bf888888');
          const stroke = kmlColor(strokeEl ? strokeEl.textContent : '00000000');
          styles[s.getAttribute('id')] = {
            fillColor: fill.hex,
            fillOpacity: fill.alpha,
            color: stroke.alpha < 0.01 ? 'transparent' : stroke.hex,
            opacity: stroke.alpha,
            weight: widthEl ? parseFloat(widthEl.textContent) : 0.5,
          };
        });

        const layers = [];
        xml.querySelectorAll('Placemark').forEach((pm) => {
          const ref = (pm.querySelector('styleUrl') || {}).textContent;
          const style =
            styles[(ref || '').replace('#', '')] || {
              fillColor: '#888',
              fillOpacity: 0.5,
              color: 'transparent',
              opacity: 0,
              weight: 0.5,
            };
          pm.querySelectorAll('Polygon').forEach((poly) => {
            const outerEl = poly.querySelector('outerBoundaryIs coordinates');
            if (!outerEl) return;
            const outer = parseCoords(outerEl.textContent);
            if (outer.length < 3) return;
            const holes = [];
            poly.querySelectorAll('innerBoundaryIs coordinates').forEach((inner) => {
              const h = parseCoords(inner.textContent);
              if (h.length >= 3) holes.push(h);
            });
            layers.push(L.polygon(holes.length ? [outer, ...holes] : outer, style));
          });
        });

        if (layers.length) {
          const group = L.featureGroup(layers).addTo(map);
          map.fitBounds(group.getBounds(), { padding: [30, 30] });
        }

        const pinIcon = L.divIcon({
          className: '',
          html: `<div style="
          width:36px;height:36px;
          background:#d4af37;
          border:3px solid #fff;
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          box-shadow:0 4px 12px rgba(0,0,0,0.5);
        "></div>`,
          iconSize: [36, 36],
          iconAnchor: [18, 36],
          popupAnchor: [0, -38],
        });

        const marker = L.marker([22.2564, 72.1764], { icon: pinIcon })
          .addTo(map)
          .bindPopup(
            '<strong style="color:#d4af37">Civil Lines Phase-1 — Dholera Bhoomi</strong><br><span style="font-size:0.8rem">Dhandhuka Highway, Ta. Dholera, Gujarat 382455</span>',
          );

        map.setView([22.2564, 72.1764], 13);
        marker.openPopup();
      })
      .catch(() => {});

    const container = map.getContainer();
    const enableZoom = () => map.scrollWheelZoom.enable();
    const disableZoom = () => map.scrollWheelZoom.disable();

    container.addEventListener('click', enableZoom);
    container.addEventListener('mouseleave', disableZoom);

    return () => {
      ac.abort();
      container.removeEventListener('click', enableZoom);
      container.removeEventListener('mouseleave', disableZoom);
      map.remove();
    };
  }, []);

  return <div id="dholeraMap" ref={containerRef} />;
}
