import React from "react";
import { Typography, Row, Col, Divider, Card, Carousel } from "antd";

const { Title, Paragraph } = Typography;

const teachers = [
  {
    image:
      "https://res.cloudinary.com/duaz5kg1m/image/upload/v1681545154/159093095_148037187186298_4762271257158948677_n_dvi1yf.jpg",
    name: "Nikesh Sapkota",
    qualification: "Bachelors",
  },
  {
    image:
      "https://res.cloudinary.com/duaz5kg1m/image/upload/v1681545154/159093095_148037187186298_4762271257158948677_n_dvi1yf.jpg",
    name: "Nikesh Sapkota",
    qualification: "Bachelors",
  },
];

const AboutPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <div style={{ flex: 1, textAlign: "center", margin: "40px" }}>
          <img
            src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1685864808/school_jwqrdl.jpg"
            alt="School Image"
            style={{
              maxWidth: "450px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Title level={2}>About Our School</Title>
          <Paragraph
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              textAlign: "justify",
            }}
          >
            Welcome to Shining Star English School, a beacon of quality
            education in the picturesque region of Tharpu, located in the remote
            area of Panchthar. For over 30 years, our school has been dedicated
            to providing exceptional educational opportunities for students in
            this beautiful but isolated region.
          </Paragraph>
          <Paragraph
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              textAlign: "justify",
            }}
          >
            At Shining Star English School, we understand the importance of a
            strong foundation in education. That's why we focus on providing
            top-notch education to students up to class 8, ensuring that they
            receive the best possible start to their academic journey. Our
            school's specialization in primary education allows us to
            concentrate our efforts on delivering comprehensive and excellent
            teaching in the crucial early years of a student's development.
          </Paragraph>
          <Paragraph
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              textAlign: "justify",
            }}
          >
            We firmly believe that education is the key to unlocking the
            potential of every individual. Our dedicated team of highly
            qualified teachers is passionate about nurturing young minds and
            inspiring them to become lifelong learners. Through a carefully
            designed curriculum, we strive to create a supportive and
            stimulating learning environment that encourages our students to
            excel academically while fostering their creativity, critical
            thinking, and problem-solving skills.
          </Paragraph>
        </div>
      </div>

      <Divider />

      <div style={{ textAlign: "center" }}>
        <Title level={3}>Meet Our Teachers</Title>
        <Carousel dots={true} autoplay={true} autoplaySpeed={5000}>
          <div>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={12} md={8} lg={6}>
                {teachers.map((value, i) => (
                  <Card key={i} hoverable>
                    <img
                      src={value.image}
                      alt="Teacher"
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                    <Title level={4}>{value.name}</Title>
                    <Paragraph>Qualifications and experience</Paragraph>
                  </Card>
                ))}
              </Col>
              {/* Add more teacher cards here */}
            </Row>
          </div>
        </Carousel>
      </div>

      <Divider />

      <div style={{ display: "flex", alignItems: "center", margin: "40px" }}>
        <div style={{ flex: "0 0 450px", textAlign: "center" }}>
          <img
            src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1685945866/75369298_952302571819235_3206045515682676736_n_hnneps.jpg"
            alt="Principal"
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <div style={{ flex: 1, textAlign: "left", marginLeft: "40px" }}>
          <Title level={3}>A Word from the Principal</Title>
          <Paragraph
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              textAlign: "justify",
            }}
          >
            "Dear students, staff, and parents,
            <br />
            <br />
            It gives me great pleasure to welcome you to Shining Star English
            School. Our school is dedicated to providing a nurturing and
            stimulating environment where students can grow, learn, and excel.
            <br />
            <br />
            We believe that every student has unique talents and abilities, and
            it is our mission to help them discover and develop their full
            potential. We strive to create a well-rounded education that focuses
            not only on academic excellence but also on character building,
            critical thinking, and social skills.
            <br />
            <br />
            As the principal, I am committed to fostering a positive and
            inclusive school culture that values diversity, respect, and
            teamwork. I encourage open communication between students, teachers,
            and parents to ensure a strong partnership in the education process.
            <br />
            <br />
            Together, let us embark on this educational journey, where we can
            inspire and empower our students to become responsible global
            citizens who make a positive impact on the world.
            <br />
            <br />
            Thank you for entrusting us with your child's education. I look
            forward to a successful and fulfilling academic year.
            <br />
            <br />
            Best regards,
            <br />
            <strong>Ishwori Prasad Sapkota</strong>
            <br />
            Principal, <br /> Shining Star English School"
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
