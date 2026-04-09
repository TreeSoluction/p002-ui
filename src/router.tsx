import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const About = lazy(() => import("./pages/about"));
const Accommodation = lazy(() => import("./pages/accommodation"));
const AccommodationDetails = lazy(() => import("./pages/accommodation/id"));
const Calendar = lazy(() => import("./pages/calendar/page"));
const Cities = lazy(() => import("./pages/cities"));
const Contact = lazy(() => import("./pages/contact"));
const FAQ = lazy(() => import("./pages/faq"));
const Freetter = lazy(() => import("./pages/freetter/page"));
const Home = lazy(() => import("./pages/home"));
const Kiosks = lazy(() => import("./pages/kiosks/page"));
const KioskDetails = lazy(() => import("./pages/kiosks/[id]/page"));
const Knitwear = lazy(() => import("./pages/knitwear/page"));
const KnitwearDetails = lazy(() => import("./pages/knitwear/[id]/page"));
const Parkings = lazy(() => import("./pages/parkings"));
const PolicyPrivacy = lazy(() => import("./pages/policy-and-privacy"));
const Restaurants = lazy(() => import("./pages/restaurants/page"));
const RestaurantDetails = lazy(() => import("./pages/restaurants/[id]/page"));
const SAC = lazy(() => import("./pages/sac"));
const Segment = lazy(() => import("./pages/segment/page"));
const SegmentDetails = lazy(() => import("./pages/segment/[name]/page"));
const StoreDetails = lazy(() => import("./pages/store/[nome]/page"));
const TermsOfUse = lazy(() => import("./pages/terms-of-use"));
const Tours = lazy(() => import("./pages/tours/page"));
const Transporters = lazy(() => import("./pages/transporters/page"));
const TransporterDetails = lazy(() => import("./pages/transporters/[id]/page"));
const NotFound = lazy(() => import("./pages/_not-found"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "accommodation", element: <Accommodation /> },
      { path: "accommodation/:id", element: <AccommodationDetails /> },
      { path: "calendar", element: <Calendar /> },
      { path: "cities", element: <Cities /> },
      { path: "contact", element: <Contact /> },
      { path: "faq", element: <FAQ /> },
      { path: "freetter", element: <Freetter /> },
      { path: "kiosks", element: <Kiosks /> },
      { path: "kiosks/:id", element: <KioskDetails /> },
      { path: "knitwear", element: <Knitwear /> },
      { path: "knitwear/:id", element: <KnitwearDetails /> },
      { path: "parkings", element: <Parkings /> },
      { path: "policy-and-privacy", element: <PolicyPrivacy /> },
      { path: "restaurants", element: <Restaurants /> },
      { path: "restaurants/:id", element: <RestaurantDetails /> },
      { path: "sac", element: <SAC /> },
      { path: "segment", element: <Segment /> },
      { path: "segment/:name", element: <SegmentDetails /> },
      { path: "store/:nome", element: <StoreDetails /> },
      { path: "terms-of-use", element: <TermsOfUse /> },
      { path: "tours", element: <Tours /> },
      { path: "transporters", element: <Transporters /> },
      { path: "transporters/:id", element: <TransporterDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
