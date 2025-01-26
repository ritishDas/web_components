# FullPageImageSlider: Usage Steps

### Steps to Use

1. **Copy the `slider.jsx` file:**
   - Place the file in your project's component folder.

2. **Copy the CSS:**
   - Extract the required CSS from the provided CSS file and integrate it into your project's CSS file.

3. **Import and Use:**
   - Import the slider function into your desired file.
   - Use it by passing an array of image paths or links as a prop.

### Example Usage
```javascript
import Slider from './path-to-slider';

const images = [
  'path/to/image1.jpg',
  'path/to/image2.jpg',
  'path/to/image3.jpg'
];

function App() {
  return <Slider images={images} />;
}

export default App;
```

