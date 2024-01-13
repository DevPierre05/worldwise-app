/* eslint-disable react/prop-types */

function Flag({ countryCode }) {
  if (!countryCode) return null;

  countryCode = countryCode.toLowerCase();
  const BASE_URL = `https://flagcdn.com/${countryCode}.svg`;

  return (
    <img
      src={BASE_URL}
      alt={`Flag of ${countryCode}`}
      style={{ height: "80%", width: "90%" }}
    />
  );
}

export default Flag;
