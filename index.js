import { h, app } from 'hyperapp';
import { Link, location } from '@hyperapp/router';

import Count from './components/Count';

const state = {
  location: location.state,
  count: 0
};

const actions = {
  location: location.actions,
  increment: () => state => ({ count: (state.count += 1) }),
  decrement: diff => state => ({ count: (state.count -= 1) })
};

const Home = () => (state, actions) => (
  <div>
    <Count count={state.count} />
    <button onclick={actions.increment}>Increment</button>
    <button onclick={actions.decrement}>Decrement</button>
  </div>
);

const Blog = () => <h1>Blog!</h1>;

const view = state => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>

    <Route path="/" render={Home} />
    <Route path="/blog" render={Blog} />
  </div>
);

const main = app(state, actions, view, document.body);

const unsubscribe = location.subscribe(main.location);