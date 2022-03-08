import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

const LazyLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="lazy1">Lazy1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<h1>Hellou</h1>}></Route>
        <Route path="lazy2" element={<h1>Hellou2</h1>}></Route>
        <Route path="lazy3" element={<h1>Hellou3</h1>}></Route>
        <Route
          path="*"
          element={<Navigate replace to="lazy1"></Navigate>}
        ></Route>
      </Routes>
    </div>
  );
};

export default LazyLayout;
