import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ServiceDetails from './ServiceDetails';
import store from '../../redux/configureStore'; // import your Redux store

test('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <ServiceDetails />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
