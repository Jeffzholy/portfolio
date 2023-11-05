const YEAR = new Date().getFullYear()

const Footer = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div style={{ height: '1px', backgroundColor: '#e2e8f0' }}></div>
      <small
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <p>
          <time>{YEAR}</time> © Zhen
        </p>
        <p>
          powered by &nbsp; <a href="https://nextra.vercel.app/">@Nextra</a>
        </p>
        {/* <p>
        <a href="/feed.xml">RSS</a>
      </p> */}
        {/* <style jsx>{`
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style> */}
      </small>
    </div>
  )
}

const themeConfig = {
  footer: <Footer />
}

export default themeConfig
