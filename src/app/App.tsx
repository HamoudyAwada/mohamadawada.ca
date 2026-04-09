import { RouterProvider } from 'react-router';
import { router } from './routes';
import BackgroundPattern from './components/BackgroundPattern/BackgroundPattern';

export default function App() {
  return (
    <>
      <BackgroundPattern />
      <RouterProvider router={router} />
    </>
  );
}