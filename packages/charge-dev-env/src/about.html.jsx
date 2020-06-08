import Layout from './layout.html.jsx';

export default ({ data }) => (
  <Layout>
    <span>About</span>
    <span>{JSON.stringify(data.about)}</span>
    <a href="/">Index</a>
  </Layout>
);
