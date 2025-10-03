import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          width: '28px',
          height: '28px',
          border: '1.5px solid white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Inner ring */}
          <div style={{
            width: '18px',
            height: '18px',
            border: '1px solid white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Center dot */}
            <div style={{
              width: '4px',
              height: '4px',
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
