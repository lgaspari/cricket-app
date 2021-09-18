const cricketAudioPath = process.env.PUBLIC_URL + '/assets/audios/cricket.mp3';
const cricketImgPath = process.env.PUBLIC_URL + '/assets/images/cricket.svg';

const cricket = new Audio(cricketAudioPath);

function App() {
  return (
    <div
      id="cricket-screen"
      onClick={() => cricket.play()}
      role="button"
      style={{
        backgroundImage: `url('${cricketImgPath}')`,
      }}
    />
  );
}

export default App;
