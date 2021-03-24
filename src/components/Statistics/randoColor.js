const randomColor = () => {
  let col;

  col = Math.round(255.0 * Math.random());
  let r = col.toString(16);
  col = Math.round(255.0 * Math.random());
  let g = col.toString(16);
  col = Math.round(255.0 * Math.random());
  let b = col.toString(16);
  return '#' + r + g + b;
};

export default randomColor;
