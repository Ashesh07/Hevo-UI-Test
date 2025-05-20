import { CardHeaderIcon } from "./CardHeaderIcon";

export const ProgressBarCard = ({ title, header, isActive, isAnimating, onClick }) => {
    return (
        <div className={`progress-bar-card ${isActive ? 'active' : ''} ${isAnimating ? 'animating' : ''}`} onClick={onClick}>
            <div className="icon-wrapper">
                <CardHeaderIcon header={header} />
                {isAnimating && <div className="circular-animation"></div>}
            </div>
            <span>{title}</span>
        </div>
    );
};