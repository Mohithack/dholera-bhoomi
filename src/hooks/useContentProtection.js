import { useEffect } from 'react';

export function useContentProtection() {
  useEffect(() => {
    const onContextMenu = (e) => e.preventDefault();
    const onCopy = (e) => e.preventDefault();
    const onSelectStart = (e) => {
      if (!e.target.closest('input, textarea, select')) e.preventDefault();
    };
    document.addEventListener('contextmenu', onContextMenu);
    document.addEventListener('copy', onCopy);
    document.addEventListener('selectstart', onSelectStart);
    return () => {
      document.removeEventListener('contextmenu', onContextMenu);
      document.removeEventListener('copy', onCopy);
      document.removeEventListener('selectstart', onSelectStart);
    };
  }, []);
}
