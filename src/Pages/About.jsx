import React from "react";

function About() {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>Bu yerdan xech narsa        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              Topolmaysiz :)
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, labore enim reiciendis neque quod sit quaerat delectus maiores minima odio aliquid dolorum! Nemo rem inventore eius, accusantium aut quisquam dolores porro aspernatur at eos, sint, harum adipisci ipsam illum repellendus dolorum minus. Animi eius aut, iure repellat quos sunt blanditiis atque delectus molestiae ab nulla voluptatum nihil perspiciatis dolorum assumenda!
      </p>
    </>
  );
}

export default About;
