// Bandera, nombre, capital
const Card = ({ country }) => {
    return (
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                <div style={{ height: '250px', overflow: 'hidden' }}>
                    <img
                        src={country.flags?.png || country.flags?.svg}
                        className="card-img-top"
                        alt={country.flags?.alt || country.name?.common}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/320x240?text=No+Flag' }}
                    />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title text-primary fw-bold mb-2">{country.name?.common}</h5>
                    {country.capital && country.capital.length > 0 && (
                        <p className="text-muted mb-0"><small>Capital: {country.capital[0]}</small></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;