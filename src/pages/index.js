import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import AboutOne from "./AboutOne";
import AboutTwo from "./AboutTwo";
import ComingSoon from "./ComingSoon";
import Community from "./Community";
import FAQ from "./FAQ";
import Page404 from "./404";
import RoadMapOne from "./RoadMapOne";
import RoadMapTwo from "./RoadMapTwo";
import NftItem from "./NftItem";
import NftItemDetails from "./NftItemDetails";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import Privacy from "./Privacy"
import TeamDetail from "./TeamDetail";
import Terms from "./Terms"


const routes = [
  { path: '/', component: <HomeThree />},
  { path: '/home-v2', component: <HomeTwo />},
  { path: '/home-v3', component: <HomeThree />},
  { path: '/about-v1', component: <AboutOne />},
  { path: '/about-v2', component: <AboutTwo />},
  { path: '/coming-soon', component: <ComingSoon />},
  { path: '/community', component: <Community />},
  { path: '/faq', component: <FAQ />},
  { path: '/404', component: <Page404 />},
  { path: '/road-map-v1', component: <RoadMapOne />},
  { path: '/road-map-v2', component: <RoadMapTwo />},
  { path: '/nft-item', component: <NftItem />},
  { path: '/nft-item-details', component: <NftItemDetails />},
  { path: '/blog', component: <Blog />},
  { path: '/blog-details', component: <BlogDetails />},
  { path: '/contact', component: <Contact />},
  { path: '/team-details', component: <TeamDetail />},
  { path: '/privacy', component: <Privacy />},
  { path: '/terms', component: <Terms />},

]

export default routes;