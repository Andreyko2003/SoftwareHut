import * as React from 'react';
// Components
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturedPost';
// MUI Elements
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// MUI Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// Posts
import {getPosts} from './getPosts'

function PostsPage() {
  const [posts, setPosts] = React.useState([]);
  const [firstPost, setFirstPost] = React.useState([]);

  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await getPosts();
        setFirstPost(res[0])
        setPosts(res.slice(1));
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);

  // Header navigation
  const header_nav = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];

  // Slidebar items
  const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };

  // Theme
  const theme = createTheme();

  // <App />
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={header_nav} />
        <main>
          <MainFeaturedPost post={firstPost} />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {
              posts.map(post => (
                <FeaturedPost key={post.title} post={post} />
              ))
            }
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </ThemeProvider>
  );
}
export default PostsPage;
