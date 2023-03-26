import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import AddReservationForm from './AddReservationForm';

test('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <AddReservationForm />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
