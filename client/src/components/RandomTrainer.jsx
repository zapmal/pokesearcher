import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Loading from './Loading';

import apiClient from '../services/api';
import capitalize from '../utils/capitalize';
import { TRAINERS_SPRITES_ENDPOINT } from '../config';

const RandomTrainer = (props) => {
  const [trainer, setTrainer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { location } = props;

  const getRandomTrainer = async () => {
    try {
      const trainers = await apiClient.get('/trainers');
      const AMOUNT_OF_TRAINERS = trainers.data.length;
      const index = Math.floor(Math.random() * ((AMOUNT_OF_TRAINERS + 1) - 1) + 1);

      const [name, rawGeneration] = trainers.data[index].split('-');
      const generation = rawGeneration.replace(/[^0-9]/g, '');
      const image = `${TRAINERS_SPRITES_ENDPOINT}/${trainers.data[index]}.png`;

      console.log(image);

      return { 
        name,
        generation,
        image,
      };
    } catch (error) {
      return {};
    }
  };

  useEffect(() => {
    getRandomTrainer().then(trainers => {
      setTrainer(trainers);
      setIsLoading(false);
    });
  }, []);

  if (location.pathname.match('/search')) {
    return null;
  }

  return (
    <div className='wrapper text-center random-trainer'>
      {isLoading 
      ? <Loading color='#f91c5e' /> 
      : (
        <>
          <h4>{capitalize(trainer.name)}</h4>

          {trainer.generation && (
            <div>
              <small className='text-muted scale'>Generation: {trainer.generation}</small>
            </div>
          )}

          <img src={trainer.image} alt={trainer.name ? `Trainer ${trainer.name}` : 'Couldn\'t load trainer.'} />
          <div>
            <small className='text-muted'>
              A random trainer obtained from Showdown's website.
            </small>
            <br />
            <small className='text-muted'>
              Their site: <a className='poke-link' target='_blank' rel='noreferrer' href='https://play.pokemonshowdown.com/'>Pokemon Showdown</a>
            </small>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(RandomTrainer);