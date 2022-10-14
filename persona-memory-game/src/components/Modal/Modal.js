import './modal.scss';

export const Modal = ({ modal }) => {
    if (modal) {
        return (
            <div className="details-modal">
                <div className="details-modal-message">
                        <p>
                            Vous avez gagné la partie !
                            Recommencer ?
                        </p>
                    </div>
                <div className="details-modal-title">
                    <h1>Bravo !</h1>
                </div>
                <div className="details-modal-bis" />
            </div>
        )
    }
}