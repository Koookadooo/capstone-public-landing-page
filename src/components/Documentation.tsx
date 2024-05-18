import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Documentation = () => {
  const { documentation } = config;
  const { title, items, bottomImage } = documentation;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-col`}>
          {items.map((item, index) => (
            <div key={index} className={`my-8`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {item.title}
              </h3>
              <p className={`text-gray-600`}>{item.description}</p>
            </div>
          ))}
        </div>
        <div className={`w-full p-6 mt-20 flex justify-center`}>
          <img
            className="w-auto h-auto"
            src={bottomImage.img}
            alt={bottomImage.alt}
          />
        </div>
      </div>
    </section>
  );
};

export default Documentation;
