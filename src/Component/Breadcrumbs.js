import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Breadcrumb.css';
function Breadcrumbs() {
  return (
    <section className='breadcrumbs'>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item active>Breeze</Breadcrumb.Item>
          <Breadcrumb.Item active>Glossary</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </section>

  );
}

export default Breadcrumbs;