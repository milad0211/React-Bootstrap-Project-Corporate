import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../assets/images/author2.jpg";

var testimonialsData = [
  {
    id: 1,
    name: "John Wills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",
    designation: "Manager",
  },
  {
    id: 2,
    name: "Jasmine Perry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!",
    designation: "Accountant",
  },
  {
    id: 3,
    name: "Rocky Johnson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?",
    designation: "CEO",
  },
];

const AppTestimonials = () => {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {testimonialsData.map((item) => {
            return (
              <Carousel.Item key={item.id}>
                <blockquote>
                  <p>{item.description}</p>
                  <cite>
                    <span className="name">{item.name}</span>
                    <span className="designation">{item.designation}</span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
};

export default AppTestimonials;
