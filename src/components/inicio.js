import { Button } from 'react-bootstrap';

function donacion() {
    window.alert('Has realizado una donación');
}
function Inicio() {

    return (
        <div>
            <h1>ONG Eloi Pellin</h1>
            <p>Puedes realizar una donación a la ONG con el siguiente botón:</p>
            <Button variant="primary" onClick={donacion}>Donar</Button>
        </div>
    );
}

export default Inicio;