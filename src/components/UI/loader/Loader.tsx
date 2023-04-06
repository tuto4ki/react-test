import './Loader.css';

export function Loader(): JSX.Element {
  return (
    <div className="loader-modal">
      <div className="loader-position">
        <div className="loader"></div>
      </div>
    </div>
  );
}
