import { Asset } from '@components/Asset';
import { ReactComponent as Logo } from 'assets/logo.svg';

export const Home = (): JSX.Element => {
  return (
    <div>
      <h1>HOME</h1>
      <Asset icon={Logo} height={24} width={24} description="" />
    </div>
  );
};
