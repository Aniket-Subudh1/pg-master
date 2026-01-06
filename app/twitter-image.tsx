import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'PG Master - India\'s #1 Renting Super App';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              letterSpacing: '-2px',
            }}
          >
            PG MASTER
          </div>
          <div
            style={{
              fontSize: 42,
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: 30,
              fontWeight: 600,
            }}
          >
            India's #1 Renting Super App
          </div>
          <div
            style={{
              fontSize: 32,
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Effortlessly manage your PG or hostel
          </div>
          
          {/* Features badges */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              marginTop: 50,
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                padding: '15px 30px',
                borderRadius: 30,
                fontSize: 24,
                color: 'white',
                fontWeight: 600,
              }}
            >
              🏠 Find PGs
            </div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                padding: '15px 30px',
                borderRadius: 30,
                fontSize: 24,
                color: 'white',
                fontWeight: 600,
              }}
            >
              📱 Easy Management
            </div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                padding: '15px 30px',
                borderRadius: 30,
                fontSize: 24,
                color: 'white',
                fontWeight: 600,
              }}
            >
              ⚡ Quick Booking
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
