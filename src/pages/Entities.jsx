import { useEffect, useMemo } from 'react';
import { useStore } from '../store/store';
import CardList from '../components/CardList';
import Pagination from '../components/Pagination';

const Entities = () => {
    const { countries, fetchCountries, loading, currentPage, itemsPerPage, setCurrentPage } = useStore();

    useEffect(() => {
        if (countries.length === 0) {
            fetchCountries();
        }
    }, [fetchCountries, countries.length]);

    const { paginatedCountries, totalPages } = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return {
            paginatedCountries: countries.slice(startIndex, endIndex),
            totalPages: Math.ceil(countries.length / itemsPerPage)
        };
    }, [countries, currentPage, itemsPerPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                    <>
                        <div className="text-center mb-3 text-muted">
                            Mostrando {paginatedCountries.length} de {countries.length} países
                        </div>
                        <CardList countries={paginatedCountries} />
                        {totalPages > 1 && (
                            <div className="my-4">
                                <Pagination 
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
 
export default Entities;