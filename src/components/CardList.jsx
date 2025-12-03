// banderas, nombre, capital
import Card from './Card';

const CardList = ({ countries }) => {
    return (
        <div className="row">
            {countries && countries.length > 0 ? (
                countries.map((country, index) => (
                    <Card key={country.name?.common || index} country={country} />
                ))
            ) : (
                <div className="col-12 text-center py-5">
                    <p className="text-muted">No hay países para mostrar</p>
                </div>
            )}
        </div>
    );
};

export default CardList;
