export const getStaticProps = async () => {
  console.log('called')

  return {
    props: {
      message: 'hello world'
    }
  }
}

export const Fun = ({ message }) => {
  return <div style={{ backgroundColor: "red" }}>{message}I am Jeff</div>
}

export default Fun
