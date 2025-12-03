import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';
import CardList from '../components/CardList';

const Home = () => {
    const { countries, fetchCountries, loading } = useStore();

    useEffect(() => {
        if (countries.length === 0) {
            fetchCountries(1);
        }
    }, [fetchCountries, countries.length]);

    const homeEntities = countries.slice(0, 4);

    return (
        <div className="container">
            <div className="p-5 mb-5 rounded-4 shadow-sm text-white text-center position-relative overflow-hidden"
                style={{
                    backgroundImage: 'url()',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
                <div className="position-relative z-1">
                    <h1 className="display-3 fw-bold mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Banderas</h1>
                    <p className="lead mb-4 fs-4 fw-bold">Banderas, nombres, capital</p>
                    <Link to="/entities" className="btn btn-light btn-lg px-5 fw-bold text-primary rounded-pill shadow">Ver Banderas</Link>
                </div>
            </div>

            <div className="mb-5">

                {loading && countries.length === 0 ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                ) : (
                    <CardList countries={homeEntities} />
                )}
            </div>
        </div>
    );
};

export default Home;