import Select from 'react-select'
import "../styles/Select.css";

const options = [
  { value: 'Ang Mo Kio', label: 'Ang Mo Kio', region: 'North' },
  { value: 'Bedok', label: 'Bedok', region: 'East' },
  { value: 'Bishan', label: 'Bishan', region: 'Central' },
  { value: 'Boon Lay', label: 'Boon Lay', region: 'West' },
  { value: 'Bukit Batok', label: 'Bukit Batok', region: 'West' },
  { value: 'Bukit Merah', label: 'Bukit Merah', region: 'South' },
  { value: 'Bukit Panjang', label: 'Bukit Panjang', region: 'West' },
  { value: 'Bukit Timah', label: 'Bukit Timah', region: 'Central' },
  { value: 'Central Water Catchment', label: 'Central Water Catchment', region: 'Central' },
  { value: 'Changi', label: 'Changi', region: 'East' },
  { value: 'Choa Chu Kang', label: 'Choa Chu Kang', region: 'West' },
  { value: 'Clementi', label: 'Clementi', region: 'West' },
  { value: 'City', label: 'City', region: 'South' },
  { value: 'Geylang', label: 'Geylang', region: 'South' },
  { value: 'Hougang', label: 'Hougang', region: 'North' },
  { value: 'Jalan Bahar', label: 'Jalan Bahar', region: 'West' },
  { value: 'Jurong East', label: 'Jurong East', region: 'West' },
  { value: 'Jurong Island', label: 'Jurong Island', region: 'West' },
  { value: 'Jurong West', label: 'Jurong West', region: 'West' },
  { value: 'Kallang', label: 'Kallang', region: 'Central' },
  { value: 'Lim Chu Kang', label: 'Lim Chu Kang', region: 'North' },
  { value: 'Mandai', label: 'Mandai', region: 'North' },
  { value: 'Marine Parade', label: 'Marine Parade', region: 'South' },
  { value: 'Novena', label: 'Novena', region: 'Central' },
  { value: 'Pasir Ris', label: 'Pasir Ris', region: 'East' },
  { value: 'Paya Lebar', label: 'Paya Lebar', region: 'East' },
  { value: 'Pioneer', label: 'Pioneer', region: 'West' },
  { value: 'Pulau Tekong', label: 'Pulau Tekong', region: 'North' },
  { value: 'Pulau Ubin', label: 'Pulau Ubin', region: 'North' },
  { value: 'Punggol', label: 'Punggol', region: 'North' },
  { value: 'Queenstown', label: 'Queenstown', region: 'South' },
  { value: 'Seletar', label: 'Seletar', region: 'North' },
  { value: 'Sembawang', label: 'Sembawang', region: 'North' },
  { value: 'Sengkang', label: 'Sengkang', region: 'North' },
  { value: 'Sentosa', label: 'Sentosa', region: 'South' },
  { value: 'Serangoon', label: 'Serangoon', region: 'North' },
  { value: 'Southern Islands', label: 'Southern Islands', region: 'South' },
  { value: 'Sungei Kadut', label: 'Sungei Kadut', region: 'North' },
  { value: 'Tampines', label: 'Tampines', region: 'East' },
  { value: 'Tanglin', label: 'Tanglin', region: 'South' },
  { value: 'Tengah', label: 'Tengah', region: 'West' },
  { value: 'Toa Payoh', label: 'Toa Payoh', region: 'Central' },
  { value: 'Tuas', label: 'Tuas', region: 'West' },
  { value: 'Western Islands', label: 'Western Islands', region: 'West' },
  { value: 'Western Water Catchment', label: 'Western Water Catchment', region: 'West' },
  { value: 'Woodlands', label: 'Woodlands', region: 'North' },
  { value: 'Yishun', label: 'Yishun', region: 'North' }
]

const customStyles = {
  option: (styles) => ({
    ...styles,
    cursor: 'pointer',
    //color: 'pink'
  })
}
const AreaInput = (props) => {
  const input = props.result;

  return (
    <>
      <div className="select">
        <Select
          styles={customStyles}
          defaultValue={input.weather}
          onChange={input.setWeather}
          options={options}
        />
      </div>
      {/* {input.weather.value} */}
    </>
  );
};

export default AreaInput;