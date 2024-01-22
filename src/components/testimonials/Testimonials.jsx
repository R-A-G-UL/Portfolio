import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/rahul-jayabal-078856210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYDL6dhViQMGA%2F2zC%2BSFcjw%3D%3D',
      name: 'Rahul J',
      role: 'Electronics Engineer',
      test: 'As a developer and a problem solver, I think Ragul is a great collaborative partner to have. I met Rasif in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/shiyaam-sundhar-v-402949210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bj2qLONduSzK01ys0TmF03A%3D%3D',
      name: 'Shiyaam',
      role: 'Full-stack developer',
      test: "It was a pleasure collaborating with Ragul on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens him knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/royal-prasanth-047270190?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbIrhotpmSKKguJI3XfDHQw%3D%3D',
      name: 'Royal Pransanth',
      role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'I worked with Ragul in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/deena-p-629115218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLnUf4Al1RoOnREROD5AFqQ%3D%3D',
      name: 'dhenna',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Ragul some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing him best and going beyond the requirements of the project he's building.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/rishikumarck?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3OCyQsv7RpKsOw82rr2tnA%3D%3D',
      name: 'Rishi Kumar',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Ragul has always conducted herself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials