import { useEffect } from 'react';
import { useStore } from '../store/store';
import CardList from '../components/CardList';

const Entities = () => {
    const { countries, fetchCountries, loading } = useStore();

    useEffect(() => {
        if (countries.length === 0) {
            fetchCountries();
        }
    }, [fetchCountries, countries.length]);

    return (
        <div className="container">
            <div className="my-5">
                <h1 className="text-center mb-4 fw-bold text-primary">Todos los Países</h1>
                
                {loading && countries.length === 0 ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                ) : (
                    <CardList countries={countries} />
                )}
            </div>
        </div>
    );
}
 
export default Entities;