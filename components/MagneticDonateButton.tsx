'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const RANGE_PER_POINT = 18;
const MAX_PULL = 0.5;

export default function MagneticDonateButton() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hover, setHover] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0, d: 0 });
  const hoverRef = useRef(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const node: HTMLAnchorElement = el;

    const pull = (10 / 20) * MAX_PULL;
    const reach = 10 * RANGE_PER_POINT;

    function onMove(event: PointerEvent) {
      const rect = node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2 - sx.get();
      const cy = rect.top + rect.height / 2 - sy.get();

      const dx = event.clientX - cx;
      const dy = event.clientY - cy;

      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      const edgeX = Math.max(0, Math.abs(dx) - rect.width / 2);
      const edgeY = Math.max(0, Math.abs(dy) - rect.height / 2);
      const gap = Math.hypot(edgeX, edgeY);

      if (inside !== hoverRef.current) {
        const lx = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
        const ly = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
        const d = 2 * Math.hypot(rect.width, rect.height);
        setOrigin({ x: lx, y: ly, d });
        hoverRef.current = inside;
        setHover(inside);
      }

      if (gap > reach) {
        x.set(0);
        y.set(0);
        return;
      }
      const falloff = reach === 0 ? 0 : 1 - gap / reach;
      x.set(dx * pull * falloff);
      y.set(dy * pull * falloff);
    }

    function onLeave() {
      x.set(0);
      y.set(0);
      hoverRef.current = false;
      setHover(false);
    }

    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [x, y, sx, sy]);

  return (
    <Link href="/donate" passHref legacyBehavior>
      <motion.a
        ref={ref}
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          padding: '13px 28px',
          borderRadius: 6,
          background: '#B85C2E',
          border: 'none',
          cursor: 'pointer',
          overflow: 'hidden',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          x: sx,
          y: sy,
          boxShadow: hover
            ? '0 8px 24px rgba(184,92,46,0.35)'
            : '0 4px 12px rgba(184,92,46,0.2)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: '0.3px',
          lineHeight: '1em',
          color: '#fff',
          transition: 'box-shadow 0.2s',
        }}
      >
        <motion.span
          aria-hidden
          initial={false}
          animate={{ scale: hover ? 1 : 0 }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: origin.y,
            left: origin.x,
            width: origin.d,
            height: origin.d,
            marginLeft: -origin.d / 2,
            marginTop: -origin.d / 2,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            transformOrigin: 'center',
            pointerEvents: 'none',
          }}
        />
        <motion.span
          initial={false}
          animate={{ color: hover ? '#fff' : '#fff' }}
          transition={{ type: 'tween', duration: 0.3 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          Donate
        </motion.span>
      </motion.a>
    </Link>
  );
}
