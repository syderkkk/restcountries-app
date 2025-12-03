const Footer = () => {
    return (
        <footer className="bg-white text-secondary text-center py-4 mt-auto border-top">
            <div className="container">
                <p className="mb-0">© {new Date().getFullYear()} Banderas APP</p>
            </div>
        </footer>
    );
};

export default Footer;