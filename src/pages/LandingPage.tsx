// pages/index.tsx
import Link from 'next/link'

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        height: '100vh', // Set the height to 100% of the viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center' // Center align vertically
      }}
    >
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '3em',
          color: '#3498db',
          marginBottom: '10px'
        }}
      >
        Cloud-based Resume Builder
      </h1>
      <p style={{ fontSize: '1.5em', color: '#555', marginBottom: '20px' }}>
        Create your professional resume with ease!
      </p>
      <Link href="/home">
        <a>
          <button
            style={{
              backgroundColor: '#3498db',
              color: '#fff',
              padding: '15px 30px',
              fontSize: '1.5em',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            Get Started
          </button>
        </a>
      </Link>
    </div>
  )
}

export default LandingPage
