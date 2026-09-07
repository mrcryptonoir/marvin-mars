import Img from './Img';

/** An image dressed as an instrument readout: corner ticks, crosshair, mono caption rail. */
export default function Plate({
  name,
  alt,
  ratio = '4 / 3',
  left,
  right,
  cross = true,
  className = '',
  eager = false,
}) {
  return (
    <figure className={`plate ${className}`} style={{ margin: 0 }}>
      <div className="plate__frame" style={{ aspectRatio: ratio }}>
        <Img name={name} alt={alt} eager={eager} />
        {cross && <div className="plate__cross" />}
        <div className="plate__ticks">
          <span /><span /><span /><span />
        </div>
      </div>
      {(left || right) && (
        <figcaption className="plate__cap">
          <span>{left}</span>
          <span>{right}</span>
        </figcaption>
      )}
    </figure>
  );
}
