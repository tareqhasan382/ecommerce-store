import Categories from "./Components/Categories";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <Container className="bg-amber-300">

      {/* Main hero area */}
      <div className="w-full flex justify-center items-center h-[265px] px-4">
  <h1 className="font-rubik font-extrabold uppercase text-center whitespace-nowrap
                 text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem] xl:text-[11rem]
                 leading-[3.5rem] sm:leading-[5.5rem] md:leading-[9rem] lg:leading-[15rem] xl:leading-[19rem]
                 tracking-normal">
    DO IT <span className="text-blue-500">RIGHT</span>
  </h1>
</div>

      {/* Header / Product area */}
      <Header />
      {/* Product List */}
      <Products />
      <Categories/>
      <Reviews/>
    </Container>
  );
}

export default App;
