const Phone = ({ size = 20, fill = "#c09446", stroke = "none" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 9L27 7L32 20L25 24C28 30 34 36 40 39L44 32L57 37L55 46C54.5 49 52 51 49 51C27 49 15 37 13 15C12.5 12 15 9.5 18 9Z"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Phone;
