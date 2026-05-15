import open_box from '../assets/open-box.png';
import closed_box from '../assets/closed-box.png';

export function OpenBox() {
  return (
    <div className="w-full h-full">
      <img src={open_box} alt="Open Box" className="w-full h-full" />
    </div>
  );
}

export function ClosedBox() {
  return (
    <div className="w-full h-full">
        <img src={closed_box} alt="Closed Box" className="w-full h-full" />
    </div>
    );
}