import Layout from '../components/MyLayout.js'

// export default function About() {
//   return (
//     <Layout>
//       <p>This is the about page</p>
//     </Layout>
//   )
// }

// Method 1 - Layout as Higher Order Component
// import withLayout from '../components/MyLayout'

// const Page = () => <p>This is the about page</p>

// export default withLayout(Page)

// Method 2 - Page content as a prop

const aboutPageContent = <p>This is the about page</p>

export default function About() {
  return <Layout content={aboutPageContent} />
}
