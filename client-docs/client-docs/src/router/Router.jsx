import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import BookingProcess from "../pages/bookingProcess/BookingProcess";
import Dashboard from "../pages/dashboard/Dashboard";
import FlightDetails from "../pages/flightDetails/FlightDetails";
import MultiCIty from "../pages/multiCIty/MultiCIty";
import RoundTrip from "../pages/roundTrip/RoundTrip";
import SearchResult from "../pages/searchResult/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/round-trip", element: <RoundTrip /> },
      { path: "/multi-city", element: <MultiCIty /> },
      { path: "/search-result", element: <SearchResult /> },
      { path: "/flight-details", element: <FlightDetails /> },
      { path: "/booking-process", element: <BookingProcess /> },
    ],
  },
]);

export default router;
