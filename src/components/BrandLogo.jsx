/** PNG asset in /public — use transparent PNG for clean edges on any background. */
const LOGO_SRC = '/logo.png';

/**
 * BhoomiTree Realty logo.
 * @param {'nav' | 'footer'} variant
 */
export function BrandLogo({ variant = 'nav', className = '' }) {
  const sizeClass =
    variant === 'footer'
      ? 'brand-logo-img--footer'
      : 'brand-logo-img--nav';

  return (
    <img
      src={LOGO_SRC}
      alt="BhoomiTree Realty — Where Bhoomi Secures"
      className={`brand-logo-img ${sizeClass} ${className}`.trim()}
      decoding="async"
      fetchPriority={variant === 'nav' ? 'high' : 'auto'}
    />
  );
}
