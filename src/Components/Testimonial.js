import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonial</h2>

      <section>
      <TestimonialCard name={'Mahfooz'} feedback={'Your a good developer in my company.'} />
        <TestimonialCard name={'Modassir'} feedback={'Wow what a portfolio, does not expected this to be on youtube!  '} />
        <TestimonialCard name={'wasim'} feedback={'Your Code style are so Amazing.'} />


      </section>
    </div>
  )
}

const TestimonialCard = ({name , feedback}) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)


export default Testimonial
