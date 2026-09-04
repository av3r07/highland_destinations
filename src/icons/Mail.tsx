const Mail = ({ size = 20, fill = "#c09446", stroke = "#ffffff" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="7"
      y="14"
      width="50"
      height="36"
      rx="5"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M9 17L32 36L55 17"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Mail;
