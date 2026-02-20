import Categories from "./Components/Categories";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Products from "./Components/Products";

function App() {
  return (
    <Container className="bg-amber-300">

      {/* Main hero area */}
      <div className="w-full flex justify-center items-center h-[265px]">
        <h1 className="font-rubik font-bold text-[200px] leading-[223.5px] tracking-normal uppercase text-center whitespace-nowrap">
          DO IT <span className=" text-blue-500 ">RIGHT</span>
        </h1>
      </div>

      {/* Header / Product area */}
      <Header />
      {/* Product List */}
      <Products />
      <Categories/>
    </Container>
  );
}

export default App;
