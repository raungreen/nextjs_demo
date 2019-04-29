import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

// Method 2 - Page content as a prop

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.content}
  </div>
)

export default Layout

// Method 1 - Layout as Higher Order Component
// const withLayout = Page => {
//   return () => (
//     <div style={layoutStyle}>
//       <Header />
//       <Page />
//     </div>
//   )
// }

// export default withLayout
