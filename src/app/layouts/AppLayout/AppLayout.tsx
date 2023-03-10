import { Outlet } from 'react-router-dom';

export const AppLayout = (): JSX.Element => {
  return (
    <div>
      <h1>App Layout</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
