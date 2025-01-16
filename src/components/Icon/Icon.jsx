import sprite from '../../assets/sprite/sprite.svg';

const Icon = ({
  id,
  width,
  height,
  className = '',
  fillColor,
  role,
  inert = role === 'button' ? 'false' : 'true',
  ...props
}) => {
  return (
    <svg
      className={`${className}`}
      style={{ background: 'transparent' }}
      width={width}
      height={height}
      inert={inert}
      role={role}
      {...props}
    >
      <use style={{ fill: `${fillColor}` }} href={`${sprite}#icon-${id}`}></use>
    </svg>
  );
};

export default Icon;
