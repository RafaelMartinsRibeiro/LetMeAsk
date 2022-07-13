import { Home } from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
        <Route path="/rooms/:id" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}
