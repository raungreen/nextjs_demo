import Layout from '../components/MyLayout.js'

// export default function Index() {
//   return (
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   )
// }

// ----> Method 1 - Layout as Higher Order Component

// import withLayout from '../components/MyLayout.js'

// const Page = () => <p>Hello Next.js</p>

// export default withLayout(Page)

// ----> Method 2 - Page content as a prop

const indexPageContent = <p>Hello Next.js</p>

export default function Index() {
  return <Layout content={indexPageContent} />
}
