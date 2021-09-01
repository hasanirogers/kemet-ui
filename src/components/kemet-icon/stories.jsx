import React from 'react';

export class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconSlugs: [],
      clicked: false,
      loading: true
    };
  }

  render() {
    const { iconSlugs, clicked, loading } = this.state;

    if (clicked) {
      return (
        <>
          {loading && <div className="kemet-icons">loading...</div>}
          {!loading && <ul className="kemet-icons">
            {iconSlugs.map(slug => (
              <li key={slug}>
                <figure>
                  <kemet-icon set={this.props.set} icon={slug} size="32"></kemet-icon>
                  <figcaption>{slug}</figcaption>
                </figure>
              </li>
            ))}
          </ul>}
        </>
      );
    }

    return (
      <div className="kemet-icons">
        <a href="#" role="button" onClick={(event) => this.handleClicked(event)}>Click to load icons.</a>
      </div>
    );
  }

  handleClicked(event) {
    event.preventDefault();

    this.setState({clicked: true})
    this.getIcons();
  }

  getUrl() {
    let url;

    switch (this.props.set) {
      case 'bootstrap': url = 'https://unpkg.com/bootstrap-icons@latest/bootstrap-icons.svg'; break;
      case 'font-awesome-brands': url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/sprites/brands.svg'; break;
      case 'font-awesome-regular': url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/sprites/regular.svg'; break;
      case 'font-awesome-solid': url = 'https://unpkg.com/@fortawesome/fontawesome-free@latest/sprites/solid.svg'; break;
      default: url = 'https://unpkg.com/bootstrap-icons@latest/bootstrap-icons.svg';
    }

    return url;
  }

  getIcons() {
    fetch(this.getUrl())
      .then(response => response.text())
      .then(xmlString => (new DOMParser()).parseFromString(xmlString, 'text/xml'))
      .then((spriteMap) => {
        const icons = spriteMap.documentElement.querySelectorAll('symbol');
        const iconSlugs = [];

        icons.forEach((icon) => {
          iconSlugs.push(icon.getAttribute('id'));
        });

        this.setState({
          iconSlugs,
          loading: false
        });
      });
  }
}
