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
            class='button button-github'
            href='https://github.com/caiocichetti'
          >
            <img className='icon' src={GithubImage} alt='Github' />
            Github
          </a>

          <br />

          <a
            class='button button-instagram'
            href='https://www.instagram.com/caiocichetti_/'
          >
            <img class='icon' src={InstagramImage} />
            Instagram
          </a>
          <br />

          <a
            class='button button-linkedin'
            href='https://www.linkedin.com/in/caio-antonio-cichetti-roberto/'
          >
            <img class='icon' src={LinkedinImage} />
            LinkedIn
          </a>
          <br />

          <a
            class='button button-rocketseat'
            href='https://app.rocketseat.com.br/me/caiocichetti'
          >
            <img class='icon' src={RocketseatImage} />
            Rocketseat
          </a>
          <br />

          <a
            class='button button-youtube'
            href='https://www.youtube.com/channel/UCQzuUbdiaL9-xtlGrfS9QQQ'
          >
            <img class='icon' src={YoutubeImage} />
            YouTube
          </a>
          <br />

          <a class='button button-telegram' href='https://t.me/caiocichetti'>
            <img class='icon' src={TelegramImage} />
            Telegram
          </a>
          <br />

          <a
            class='button button-twitch'
            href='https://www.twitch.tv/caio_antonio'
          >
            <img class='icon' src={TwitchImage} />
            Twitch
          </a>
          <br />

          <a
            class='button button-steam'
            href='https://steamcommunity.com/id/caio2002'
          >
            <img class='icon' src={SteamImage} />
            Steam
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
