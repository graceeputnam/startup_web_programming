import { Players } from './players';
import { RateGame } from './rateGame';

export function Play(props) {
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <RateGame userName={props.userName} />
    </main>
  );
}

