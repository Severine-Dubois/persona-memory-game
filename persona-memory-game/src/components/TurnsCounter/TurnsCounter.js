import './turnscounter.scss';

export const TurnsCounter = ({ turns }) => {
    return (
        <div className="counter">
            Nombre de tour(s) : {turns}
            <div className="counter-child" />
        </div>
    )
}