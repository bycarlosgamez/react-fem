const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Mio',
      animal: 'Dog',
      breed: 'Husky',
    }),
    React.createElement(Pet, {
      name: 'Tito',
      animal: 'Dog',
      breed: 'Labrador',
    }),
    React.createElement(Pet, {
      name: 'Memo',
      animal: 'Fish',
      breed: 'Goldfish',
    }),
  ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
