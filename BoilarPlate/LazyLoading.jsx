import React, { lazy, Suspense } from 'react'
const MyComponent = lazy(()=> import('./Accordian'));

const LazyLoading = () => {

    const arr = [
        {
          q: "How are you welcomed",
          a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quasi",
        },
        {
          q: "What services do you provide",
          a: "We offer a wide range of services including web development, graphic design, and digital marketing.",
        },
        {
          q: "How can I contact customer support",
          a: "You can reach our customer support team via email, phone, or live chat available on our website.",
        },
        {
          q: "What are your business hours",
          a: "Our business hours are from 9 AM to 5 PM, Monday to Friday.",
        },
        {
          q: "Do you offer customized solutions",
          a: "Yes, we provide customized solutions tailored to your specific needs and requirements.",
        },
        {
          q: "What is your refund policy",
          a: "We have a 30-day refund policy for any services or products purchased. Please refer to our refund policy page for more details.",
        },
      ];

  return (
    <div>
      <Suspense fallback={ <div>Loading ..</div>}>
        <MyComponent heading={"hello Developers"} arr={arr}/>
      </Suspense>
    </div>
  )
}

export default LazyLoading
