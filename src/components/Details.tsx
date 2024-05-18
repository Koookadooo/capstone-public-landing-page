import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Details = () => {
  const { details } = config;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {details.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            {details.items.map((item, index) => (
              <div key={index} className={`mt-20`}>
                <h3
                  className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
                >
                  {item.title}
                </h3>
                <p className={`text-gray-600`}>{item.description}</p>
              </div>
            ))}
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            {details.items.map(
              (item, index) =>
                index < 2 && (
                  <div key={index} className={`mt-20`}>
                    <img className="h-6/6" src={item.img} alt={item.title} />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
