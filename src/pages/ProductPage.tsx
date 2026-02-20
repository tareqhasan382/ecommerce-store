import Container from "../Components/Container"
import Products from "../Components/Products";


const ProductPage = () => {
  return (
    <Container>
      <div className=" flex items-start justify-between ">
        <div>left side</div>
        <div>right side</div>
      </div>
      <Products/>
    </Container>
  )
}

export default ProductPage;