// Home.jsx

import { images } from '../images';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className="image-container">
        {images.map(image => (
          <div key={image.id}>
            <img src={image.data} alt={image.description} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
