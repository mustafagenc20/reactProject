import { Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <CategoryList></CategoryList>
          <ProductList/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
