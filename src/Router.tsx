import { Home } from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NewRoom } from "./pages/NewRoom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
      </Routes>
    </BrowserRouter>
  );
}
