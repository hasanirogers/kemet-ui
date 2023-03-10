import React, { useState } from 'react';
import { KemetIconInterface } from '../../../src/components/kemet-icon/types';
import './Icons.css';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'kemet-icon': KemetIconInterface
    }
  }
}

export const Icons = (props) => {
  const [iconSlugs, setIconSlugs] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClicked = (event) => {
    event.preventDefault();
    setClicked(true);
    getIcons();
  }

  const getIcons = () => {
    fetch(getUrl())
      .then(response => response.text())
      .then(xmlString => (new DOMParser()).parseFromString(xmlString, 'text/xml'))
      .then((spriteMap) => {
        const icons = spriteMap.documentElement.querySelectorAll('symbol');
        const slugs: any[] = [];

        icons.forEach((icon) => {
          slugs.push(icon.getAttribute('id'));
        });

        setIconSlugs(slugs);
        setLoading(false);
      });
  }

  const getUrl = () => {
    let url;

    switch (props.set) {
      case 'bootstrap': url = 'https://unpkg.com/bootstrap-icons@latest/bootstrap-icons.svg'; break;
      case 'font-awesome-brands': url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/sprites/brands.svg'; break;
      case 'font-awesome-regular': url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/sprites/regular.svg'; break;
      case 'font-awesome-solid': url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/sprites/solid.svg'; break;
      default: url = 'https://unpkg.com/bootstrap-icons@latest/bootstrap-icons.svg';
    }

    return url;
  }

  const makeIcons = () => {
    if (loading) {
      return <div className="kemet-icons">loading...</div>;
    }

    return (
      <ul className="kemet-icons">
        {iconSlugs.map(slug => (
          <li key={slug}>
            <figure>
              <kemet-icon set={props.set} icon={slug} size="32"></kemet-icon>
              <figcaption>{slug}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    );
  }

  if (clicked) {
    return <div>{makeIcons()}</div>;
  }

  return (
    <div className="kemet-icons">
      <a href="#" role="button" onClick={event => handleClicked(event)}>Click to load icons.</a>
    </div>
  );
};
