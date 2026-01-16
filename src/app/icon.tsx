import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: '#020617', // slate-950
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#06b6d4', // cyan-500
          borderRadius: '20%', // rounded corners
          border: '2px solid #1e293b', // slate-800
          fontWeight: 700,
          fontFamily: 'monospace',
        }}
      >
        RV
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
