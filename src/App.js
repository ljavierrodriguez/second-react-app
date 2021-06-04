import PropTypes from 'prop-types';
import Input from './Input';

const App = ({ name }) => {
    return (
        <>
            <h1>Hola desde React</h1>
            <h3>Bienvenido {name}</h3>
            <Input type={"text"} placeholder={"Ingrese  Usuario"} className={"form-control"} />
            <Input type={"password"} placeholder={"Ingrese Contraseña"} className={"form-control"} />
            <button className="btn btn-info">Click me</button>
        </>
    )
}

App.propTypes = {
    name: PropTypes.string
}

export default App;