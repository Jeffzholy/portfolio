const YEAR = new Date().getFullYear()

const Footer = () => {
  return (
    <small
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '8rem'
      }}
    >
      <p>
        <time>{YEAR}</time> © Jeff Zhang.
      </p>
      <p>
        powered by &nbsp; <a href="https://nextra.vercel.app/">@Nextra</a>
      </p>
      {/* <p>
        <a href="/feed.xml">RSS</a>
      </p> */}
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}

const themeConfig = {
  footer: <Footer />
}

export default themeConfig
