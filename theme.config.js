const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '8rem',
        backgroundColor: 'red'
      }}
    >
      <p>
        <time style={{ backgroundColor: 'green' }}>{YEAR}</time> © Jeff Zhang.
      </p>
      <p style={{ backgroundColor: 'yellow' }}>
        powered by &nbsp; <a href="https://nextra.vercel.app/">@Nextra</a>
      </p>
      {/* <p>
        <a href="/feed.xml">RSS</a>
      </p> */}
      <style jsx>{`
        a {
          float: right;
        }
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
