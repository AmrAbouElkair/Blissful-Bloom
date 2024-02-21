import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// fontawsome
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
