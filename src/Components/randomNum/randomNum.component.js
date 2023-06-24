export default function RandNum(props) {
  // const [num, setNum] = useState(0);
  // const handleClick = () => {
  //   return Math.floor(Math.random() * (props.maxNum - props.minNum + 1)) + props.minNum;
  // };
  return (
    <div>
      {
        <p>
          {Math.floor(Math.random() * (props.maxNum - props.minNum + 1)) +
            props.minNum}
        </p>

        /* <h2>number is: {num}</h2>
      <button onClick={handleClick}>Generate random number</button> */
      }
    </div>
  );
}
