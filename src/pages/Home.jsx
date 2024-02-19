
import imageData from '../images'; 

const Home = () => {
  return (
    <div>
      <h1>Images</h1>
      <div>
        {imageData.map(image => (
        <>
          {console.log(image)}
          <img key={image.id} src={image.url} alt={image.name} />
        </>
         
        ))}
      </div>
    </div>
  );
}

export default Home;
