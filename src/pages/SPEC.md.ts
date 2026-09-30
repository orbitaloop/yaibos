// Serves the raw spec at /SPEC.md so the root SPEC.md stays the single source.
import raw from '../../SPEC.md?raw';

export const GET = () =>
  new Response(raw, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
