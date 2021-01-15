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
    const AMOUNT_OF_TRAINERS = 726;
    const index = Math.floor(Math.random() * ((AMOUNT_OF_TRAINERS + 1) - 1) + 1);

    try {
      const trainers = await apiClient.get('/trainers');

      return { 
        name: trainers.data[index], 
        image: `${TRAINERS_SPRITES_ENDPOINT}/${trainers.data[index]}.png`
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
          <img src={trainer.image} alt='Random Trainer' />
          <div>
            <small className='text-muted'>A Random trainer obtained from Showdown's website.</small>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(RandomTrainer);