import Img from './Img';
import Loop from './Loop';

/** An image dressed as an instrument readout: corner ticks, nothing else. */
export default function Plate({ name, alt, ratio = '4 / 3', loop, className = '' }) {
  return (
    <figure className={`plate ${className}`} style={{ margin: 0 }}>
      <div className="plate__frame" style={{ aspectRatio: ratio }}>
        {loop ? <Loop name={loop} poster={name} alt={alt} /> : <Img name={name} alt={alt} />}
        <div className="plate__ticks">
          <span /><span /><span /><span />
        </div>
      </div>
    </figure>
  );
}
