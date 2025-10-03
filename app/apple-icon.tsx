import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
        }}
      >
        {/* Outer ring */}
        <div style={{
          width: '160px',
          height: '160px',
          border: '8px solid white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Inner ring */}
          <div style={{
            width: '100px',
            height: '100px',
            border: '6px solid white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Center dot */}
            <div style={{
              width: '24px',
              height: '24px',
              backgroundColor: 'white',
              borderRadius: '50%',
            }} />
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
