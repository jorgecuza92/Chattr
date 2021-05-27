import { Circle } from 'better-react-spinkit';

function Loading() {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: "100vh" }} >
      <div>
        <img
          src="https://icons-for-free.com/iconfiles/png/512/bubblechat+chat+conversation+message+speech+talk+icon-1320185973389477433.png"
          height={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color='orange' size={60} />
      </div>
    </center>
  );
}

export default Loading;
