import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction /> */}
          <SellerInfo />

          <WarrancySection />      
          <WarrancySection />      
          <WarrancySection />      
        </Column>
      </Panel>
    </Container>
  );
};

const WarrancySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus ipsum ut augue volutpat, placerat sollicitudin massa facilisis. Cras pellentesque luctus purus, sit amet pharetra neque ultrices in. Maecenas luctus lorem non dui feugiat facilisis. Donec vel dapibus lacus, at maximus est. Vivamus semper neque vitae hendrerit accumsan. Fusce bibendum ligula ut magna rhoncus accumsan. Mauris aliquet at leo vitae dapibus. Aenean posuere velit a rutrum laoreet. Vestibulum pulvinar ipsum risus, nec rhoncus erat semper non. Sed vitae vestibulum neque. Maecenas eu sapien tincidunt diam facilisis imperdiet non eu velit. Sed elementum velit vel purus ornare gravida. Maecenas vitae sagittis felis. Ut dui mi, rhoncus at augue et, commodo malesuada felis. Donec a lorem bibendum, fermentum metus cursus, tincidunt urna.</p>
    <br />
    <br />
    Itens inclusos: <br />
    - 1x LED <br /> 
    - 1x LED <br /> 
    - 1x LED <br /> 
    - 1x LED <br /> 
    - 1x LED <br /> 
    <br />
    Sed vitae dapibus ipsum, quis consectetur ex. Duis at ipsum elit. Nam rutrum interdum blandit. Nulla eu eros tristique, scelerisque ex porta, tristique quam. Integer in pellentesque mi. Aliquam accumsan gravida tortor, eu fringilla arcu vulputate a. Sed ac enim molestie erat ullamcorper finibus. Etiam vestibulum efficitur leo ac efficitur. Integer sed augue risus. Pellentesque at pretium orci, a laoreet sapien. Morbi non est enim. Maecenas augue ipsum, dictum eget cursus nec, ultricies sed urna. Etiam accumsan suscipit egestas. Pellentesque at mauris et est condimentum bibendum sed et libero. Integer nec imperdiet felis. Suspendisse vel vehicula ex, non volutpat risus.
  </Description> 
)

export default Product;