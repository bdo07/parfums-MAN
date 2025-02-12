import BlurText from "../AnimationTest/BlurText";
import ProductList from "../CardParfums/productList";
import ModelViewer from "../COMPonentviews/ ModelViewer";
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Home = () => {
  return ( 
<>
<ModelViewer />
<BlurText
          text="PARFUMS AMAN"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="large-text mb-8"
        />
<ProductList />

</>


  
)
  
  
};

export default Home;
