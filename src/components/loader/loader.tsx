import './loader.css';

export default function Loader() {
    return (
        <div id="pre-load" className="loader">
            <div className="loader-inner">
                <div className="loader-logo">
                    <span className='text-white font-mono'>Loading...</span>
                </div>
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
            </div>
        </div>
    );
}
