export default function WaveDivider({ onGreen = false }: { onGreen?: boolean }) {
  return (
    <div className={`waveline${onGreen ? ' on-green' : ''}`}>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path
          d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
          fill={onGreen ? '#F5F6F0' : '#F5F6F0'}
        />
      </svg>
    </div>
  );
}
