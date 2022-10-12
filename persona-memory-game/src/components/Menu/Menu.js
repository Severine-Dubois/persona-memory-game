import './menu.scss';

export const Menu = () => {
    return (
        <nav className="menu">
            <div>
                <p>Musique</p>
                <a href="#">A propos</a>
            </div>
            <div>
                <p className="year-me">2022 - Séverine</p>
            </div>
        </nav>
    );
};