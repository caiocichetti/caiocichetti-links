import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Dashboard.css';
import '../styles/Brands.css';

import CaioImage from '../images/photo.png';
import GithubImage from '../icons/github.svg';
import InstagramImage from '../icons/instagram.svg';
import LinkedinImage from '../icons/linkedin.svg';
import RocketseatImage from '../icons/rocketseat.svg';
import YoutubeImage from '../icons/youtube.svg';
import TelegramImage from '../icons/telegram.svg';
import TwitchImage from '../icons/twitch.svg';
import SteamImage from '../icons/steam.svg';

function Dashboard() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='column'>
          <img className='photo' src={CaioImage} alt='Caio' />

          <h1>Caio Cichetti</h1>

          <p>
            I currently study Computer Engineering at USF and work with
            development at Sensedia 😊
          </p>

          <Link to='/setup' className='button button-setup'>
            💻 Setup
          </Link>

          <br />

          <a
            className='button button-github'
            href='https://github.com/caiocichetti'
          >
            <img className='icon' src={GithubImage} alt='Github' />
            Github
          </a>

          <br />

          <a
            className='button button-instagram'
            href='https://www.instagram.com/caiocichetti_/'
          >
            <img className='icon' src={InstagramImage} alt='Instagram' />
            Instagram
          </a>
          <br />

          <a
            className='button button-linkedin'
            href='https://www.linkedin.com/in/caio-antonio-cichetti-roberto/'
          >
            <img className='icon' src={LinkedinImage} alt='Linkedin' />
            LinkedIn
          </a>
          <br />

          <a
            className='button button-rocketseat'
            href='https://app.rocketseat.com.br/me/caiocichetti'
          >
            <img className='icon' src={RocketseatImage} alt='Rocketseat' />
            Rocketseat
          </a>
          <br />

          <a
            className='button button-youtube'
            href='https://www.youtube.com/channel/UCQzuUbdiaL9-xtlGrfS9QQQ'
          >
            <img className='icon' src={YoutubeImage} alt='Youtube' />
            YouTube
          </a>
          <br />

          <a
            className='button button-telegram'
            href='https://t.me/caiocichetti'
          >
            <img className='icon' src={TelegramImage} alt='Telegram' />
            Telegram
          </a>
          <br />

          <a
            className='button button-twitch'
            href='https://www.twitch.tv/caio_antonio'
          >
            <img className='icon' src={TwitchImage} alt='Twitch' />
            Twitch
          </a>

          <br />
          <br />
          <br />
          <br />
          <p>
            Built by ©Caio Cichetti | Forked LittleLink | Deployed at Vercel
          </p>

          <br />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
