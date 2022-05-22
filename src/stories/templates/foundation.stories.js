import { html } from 'lit';

const AgencyTemplate = () => html`
  <header kemet-layout="flexrow" kemet-align="middle" kemet-autostack kemet-background-color="gray2">
    <div kemet-margin-left="tiny:normal">
      <ul kemet-layout="flexlist" kemet-align="middle" kemet-gutters>
        <li><h2>Agency Name</h2></li>
        <li><a href="#one">One</a></li>
        <li><a href="#two">Two</a></li>
      </ul>
    </div>
    <div kemet-margin-right="tiny:normal" kemet-breakpoint="tiny:content">
      <ul kemet-layout="flexlist" kemet-gutters>
        <li><a href="#three">Three</a></li>
        <li><a href="#four">Four</a></li>
        <li><a href="#five">Five</a></li>
        <li><a href="#six">Six</a></li>
      </ul>
    </div>
  </header>

  <br />

  <section kemet-type-align="tiny:center" kemet-margin="tiny:normal">
    <h1>Changing the World Through Design</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
    <ul kemet-layout="flexlist" kemet-gutters>
      <li><kemet-button>Learn More</kemet-button></li>
      <li><kemet-button>Learn Less</kemet-button></li>
    </ul>
  </section>

  <br /><hr /><br />

  <section>
    <div kemet-layout="flexgrid" kemet-gutters kemet-margin-left="tiny:normal" kemet-margin-right="tiny:normal">
      <div kemet-breakpoint="tiny:100 medium:50">
        <img src="https://via.placeholder.com/1920x1080" alt="A place holder" style="max-width:100%;" />
      </div>
      <div kemet-breakpoint="tiny:100 medium:50" kemet-order="medium:minus-1">
        <h1>Our Agency, our selves.</h1>
        <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.</p>
      </div>
      <div kemet-breakpoint="tiny:100 medium:33">
        <h2>Photoshop</h2>
        <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
      </div>
      <div kemet-breakpoint="tiny:100 medium:33">
        <h2>Javascript</h2>
        <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
      </div>
      <div kemet-breakpoint="tiny:100 medium:33">
        <h2>Marketing</h2>
        <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
      </div>
    </div>
  </section>


  <hr /><br />

  <section kemet-layout="flexrow" kemet-type-align="tiny:center">
    <a href="#"><div kemet-type-size="plus-6">28</div>Websites</a>
    <a href="#"><div kemet-type-size="plus-6">43</div>Apps</a>
    <a href="#"><div kemet-type-size="plus-6">95</div>Ads</a>
    <a href="#"><div kemet-type-size="plus-6">59</div>Cakes</a>
    <a href="#"><div kemet-type-size="plus-6">18</div>Logos</a>
  </section>

  <br /><hr />

  <section>
    <div kemet-margin="tiny:normal">
      <h2>Our Recent Work</h2>
      <div kemet-layout="flexgrid" kemet-basis="tiny:1-columns medium:4-columns" kemet-gutters="tiny:plus-3">
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
        <div><img src="https://via.placeholder.com/1920x1080?text=Work" alt="Work" style="max-width:100%;" /></div>
      </div>
    </div>
  </section>

  <hr />

  <section kemet-margin="tiny:normal">
    <div kemet-layout="flexlist" kemet-gutters>
      <a href="#one">One</a>
      <a href="#two">Two</a>
      <a href="#three">Three</a>
      <a href="#four">Four</a>
    <div>
  </section>
`;
export const Agency = AgencyTemplate.bind({});

const eCommerceTemplate = () => html`
  <header kemet-layout="flexrow" kemet-align="middle" kemet-autostack kemet-background-color="gray2">
    <div kemet-margin-left="tiny:normal">
      <ul kemet-layout="flexlist" kemet-align="middle" kemet-gutters>
        <li><h2>Site Name</h2></li>
        <li><a href="#one">One</a></li>
        <li><a href="#two">Two</a></li>
        <li><a href="#three">Three</a></li>
      </ul>
    </div>
    <div kemet-margin-right="tiny:normal" kemet-breakpoint="tiny:content">
      <ul kemet-layout="flexlist" kemet-gutters>
        <li><a href="#two">Three</a></li>
        <li><a href="#one">Four</a></li>
        <li><a href="#two">Five</a></li>
        <li><a href="#three">Six</a></li>
      </ul>
    </div>
  </header>

  <br /><hr /><br />

  <section kemet-margin="tiny:normal">
    <h2 class="text-center">Our Newest Product</h2>
    <hr /><br />
    <div kemet-layout="flexrow" kemet-gutters="tiny:plus-3" kemet-autostack>
      <div>
        <img src="https://via.placeholder.com/480x720?text=[Product]" alt="Product" style="width:100%;" />
        <h3>Nulla At Nulla Justo, Eget</h3>
        <span>$400</span>
        <p><kemet-button>Buy</kemet-button></p>
      </div>
      <div>
        <img src="https://via.placeholder.com/480x720?text=[Product]" alt="Product" style="width:100%;" />
        <h3>Nulla At Nulla Justo, Eget</h3>
        <span>$400</span>
        <p><kemet-button>Buy</kemet-button></p>
      </div>
      <div>
        <img src="https://via.placeholder.com/480x720?text=[Product]" alt="Product" style="width:100%;" />
        <h3>Nulla At Nulla Justo, Eget</h3>
        <span>$400</span>
        <p><kemet-button>Buy</kemet-button></p>
      </div>
      <div>
        <img src="https://via.placeholder.com/480x720?text=[Product]" alt="Product" style="width:100%;" />
        <h3>Nulla At Nulla Justo, Eget</h3>
        <span>$400</span>
        <p><kemet-button>Buy</kemet-button></p>
      </div>
    </div>
  </section>

  <hr />

  <img src="https://via.placeholder.com/1920x320/0c4a6e/ffffff?text=Specials" alt="Weekly Specials" style="max-width:100%;" />

  <hr />

  <section kemet-margin="tiny:normal">
    <h2 class="text-center">Some Other Near Products</h2>
    <hr /><br />
    <div kemet-layout="flexgrid" kemet-gutters="tiny:plus-3" kemet-basis="tiny:2-columns medium:3-columns large:6-columns">
      <div>
        <img src="https://via.placeholder.com/480x720?text=[Product]" alt="Product" style="width:100%;" />
        <h3>Nulla At Nulla Justo, Eget</h3>
        <span>$400</span>
        <p><kemet-button>Buy</kemet-button></p>
      </div>
      <div>
        <img src="https://via.placeholder.com/480x720?text=[Product]" alt="Product" style="width:100%;" />
        <h3>Nulla At Nulla Justo, Eget</h3>
        <span>$400</span>
        <p><kemet-button>Buy</kemet-button></p>
      </div>
      <div>
        <img src="https://via.placeholder.com/480x720?text=[Product]" alt="Product" style="width:100%;" />
        <h3>Nulla At Nulla Justo, Eget</h3>
        <span>$400</span>
        <p><kemet-button>Buy</kemet-button></p>
      </div>
      <div>
        <img src="https://via.placeholder.com/480x720?text=[Product]" alt="Product" style="width:100%;" />
        <h3>Nulla At Nulla Justo, Eget</h3>
        <span>$400</span>
        <p><kemet-button>Buy</kemet-button></p>
      </div>
      <div>
        <img src="https://via.placeholder.com/480x720?text=[Product]" alt="Product" style="width:100%;" />
        <h3>Nulla At Nulla Justo, Eget</h3>
        <span>$400</span>
        <p><kemet-button>Buy</kemet-button></p>
      </div>
      <div>
        <img src="https://via.placeholder.com/480x720?text=[Product]" alt="Product" style="width:100%;" />
        <h3>Nulla At Nulla Justo, Eget</h3>
        <span>$400</span>
        <p><kemet-button>Buy</kemet-button></p>
      </div>
    </div>
  </section>

  <hr />

  <section kemet-layout="flexrow" kemet-gutters kemet-autostack kemet-margin-left="tiny:normal" kemet-margin-right="tiny:normal">
    <div>
      <h3>Top Products</h3>
      <div kemet-layout="flexrow">
        <div kemet-breakpoint="tiny:content">
          <img src="https://via.placeholder.com/100x100" width="100" height="100" alt="a placeholder" kemet-margin-right="tiny:small" />
        </div>
        <div>
          <strong>Nunc Eu Ullamcorper Orci</strong>
          <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
        </div>
      </div>
      <br />
      <div kemet-layout="flexrow">
        <div kemet-breakpoint="tiny:content">
          <img src="https://via.placeholder.com/100x100" width="100" height="100" alt="a placeholder" kemet-margin-right="tiny:small" />
        </div>
        <div>
          <strong>Nunc Eu Ullamcorper Orci</strong>
          <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
        </div>
      </div>
      <br />
      <div kemet-layout="flexrow">
        <div kemet-breakpoint="tiny:content">
          <img src="https://via.placeholder.com/100x100" width="100" height="100" alt="a placeholder" kemet-margin-right="tiny:small" />
        </div>
        <div>
          <strong>Nunc Eu Ullamcorper Orci</strong>
          <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
        </div>
      </div>
    </div>
    <div>
      <h3>Top Products</h3>
      <div kemet-layout="flexrow">
        <div kemet-breakpoint="tiny:content">
          <img src="https://via.placeholder.com/100x100" width="100" height="100" alt="a placeholder" kemet-margin-right="tiny:small" />
        </div>
        <div>
          <strong>Nunc Eu Ullamcorper Orci</strong>
          <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
        </div>
      </div>
      <br />
      <div kemet-layout="flexrow">
        <div kemet-breakpoint="tiny:content">
          <img src="https://via.placeholder.com/100x100" width="100" height="100" alt="a placeholder" kemet-margin-right="tiny:small" />
        </div>
        <div>
          <strong>Nunc Eu Ullamcorper Orci</strong>
          <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
        </div>
      </div>
      <br />
      <div kemet-layout="flexrow">
        <div kemet-breakpoint="tiny:content">
          <img src="https://via.placeholder.com/100x100" width="100" height="100" alt="a placeholder" kemet-margin-right="tiny:small" />
        </div>
        <div>
          <strong>Nunc Eu Ullamcorper Orci</strong>
          <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
        </div>
      </div>
    </div>
    <div>
      <h3>Top Products</h3>
      <div kemet-layout="flexrow">
        <div kemet-breakpoint="tiny:content">
          <img src="https://via.placeholder.com/100x100" width="100" height="100" alt="a placeholder" kemet-margin-right="tiny:small" />
        </div>
        <div>
          <strong>Nunc Eu Ullamcorper Orci</strong>
          <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
        </div>
      </div>
      <br />
      <div kemet-layout="flexrow">
        <div kemet-breakpoint="tiny:content">
          <img src="https://via.placeholder.com/100x100" width="100" height="100" alt="a placeholder" kemet-margin-right="tiny:small" />
        </div>
        <div>
          <strong>Nunc Eu Ullamcorper Orci</strong>
          <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
        </div>
      </div>
      <br />
      <div kemet-layout="flexrow">
        <div kemet-breakpoint="tiny:content">
          <img src="https://via.placeholder.com/100x100" width="100" height="100" alt="a placeholder" kemet-margin-right="tiny:small" />
        </div>
        <div>
          <strong>Nunc Eu Ullamcorper Orci</strong>
          <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
        </div>
      </div>
    </div>
  </section>

  <section kemet-margin-left="tiny:normal" kemet-margin-right="tiny:normal">
    <br /><br />
    <div>
      <h3>Vivamus Hendrerit Arcu Sed Erat Molestie</h3>
      <div kemet-layout="flexrow" kemet-autostack>
        <div kemet-breakpoint="tiny:50">
          <p>Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit.</p>
          <p>Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit.</p>
        </div>
        <div>
          <ul>
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
            <li><a href="#">Four</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
            <li><a href="#">Four</a></li>
          </ul>
        </div>
      </div>
    </div>
    <br /><br />
  </section>
`;
export const eCommerce = eCommerceTemplate.bind({});

const NewsTemplate = () => html`
  <header kemet-padding="tiny:smallest" kemet-background-color="gray2">
    <section kemet-layout="flexrow" kemet-align="middle" kemet-autostack>
      <div>
        <ul kemet-layout="flexlist" kemet-gutters>
          <li><a href="#one">One</a></li>
          <li><a href="#two">Two</a></li>
          <li><a href="#three">Three</a></li>
          <li><a href="#four">Four</a></li>
        </ul>
      </div>
      <div kemet-breakpoint="tiny:100 medium:30">
        <kemet-input type="search" icon-left="search"></kemet-input>
      </div>
    </section>
  </header>

  <main kemet-padding="tiny:small">
    <section>
      <div kemet-layout="flexrow" kemet-gutters="tiny:plus-3" kemet-flex-items>
        <div kemet-breakpoint="tiny:33">
          <svg width="100%" height="150">
            <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Logo]</text>
          </svg>
        </div>
        <div>
          <svg width="100%" height="150">
            <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Advertisements]</text>
          </svg>
        </div>
      </div>
    </section>

    <nav kemet-hide="medium:down" kemet-margin-top="tiny:small">
      <svg width="100%" height="100">
        <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Navigation]</text>
      </svg>
    </nav>

    <br />

    <section kemet-layout="flexrow" kemet-autostack kemet-gutters="tiny:plus-3" style="max-height:328px;">
      <div kemet-breakpoint="medium:66">
        <svg width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Promoted Article]</text>
        </svg>
      </div>
      <div kemet-layout="flexcolumn" kemet-gutters="tiny:plus-3" style="min-height:200px;">
        <div>
          <svg width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Article]</text>
          </svg>
        </div>
        <div>
          <svg width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Article]</text>
          </svg>
        </div>
      </div>
    </section>

    <br />

    <section>
      <hr />
      <h2 kemet-type-align="center" kemet-type-size="tiny:plus-4">Breaking News</h2>
      <hr />
      <br />
      <div kemet-layout="flexgrid" kemet-basis="tiny:2-columns medium:5-columns" kemet-gutters>
        <div>
          <svg width="100%" height="150">
            <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="1rem">Look at me!</text>
          </svg>
        </div>
        <div>
          <svg width="100%" height="150">
            <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="1rem">Look at me!</text>
          </svg>
        </div>
        <div>
          <svg width="100%" height="150">
            <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="1rem">Look at me!</text>
          </svg>
        </div>
        <div>
          <svg width="100%" height="150">
            <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="1rem">Look at me!</text>
          </svg>
        </div>
        <div>
          <svg width="100%" height="150">
            <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="1rem">Look at me!</text>
          </svg>
        </div>
      </div>
    </section>

    <br />

    <section>
      <hr />
      <h2 kemet-type-align="center" kemet-type-size="tiny:plus-4">Latest Stories</h2>
      <hr />
      <br />
      <div kemet-layout="flexgrid" kemet-gutters="tiny:plus-3">
        <article kemet-breakpoint="tiny:100 medium:66">
          <div kemet-layout="flexrow" kemet-gutters kemet-autostack>
            <div kemet-breakpoint="tiny:100 small:40">
              <svg width="100%" height="150">
                <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Thumbnail]</text>
              </svg>
            </div>
            <div>
              <h3><a href="#">Death Star vaporizes it's own planet</a>.</h3>
              <ul kemet-layout="flexlist" kemet-gutters>
                <li>By Thadeus<li>
                <li>11/23/16<li>
                <li>6 Comments<li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
            </div>
          </div>
          <hr />
          <div kemet-layout="flexrow" kemet-gutters kemet-autostack>
            <div kemet-breakpoint="tiny:100 small:40">
              <svg width="100%" height="150">
                <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Thumbnail]</text>
              </svg>
            </div>
            <div>
              <h3><a href="#">Death Star vaporizes it's own planet</a>.</h3>
              <ul kemet-layout="flexlist" kemet-gutters>
                <li>By Thadeus<li>
                <li>11/23/16<li>
                <li>6 Comments<li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
            </div>
          </div>
          <hr />
          <div kemet-layout="flexrow" kemet-gutters kemet-autostack>
            <div kemet-breakpoint="tiny:100 small:40">
              <svg width="100%" height="150">
                <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Thumbnail]</text>
              </svg>
            </div>
            <div>
              <h3><a href="#">Death Star vaporizes it's own planet</a>.</h3>
              <ul kemet-layout="flexlist" kemet-gutters>
                <li>By Thadeus<li>
                <li>11/23/16<li>
                <li>6 Comments<li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
            </div>
          </div>
          <hr />
          <div kemet-layout="flexrow" kemet-gutters kemet-autostack>
            <div kemet-breakpoint="tiny:100 small:40">
              <svg width="100%" height="150">
                <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Thumbnail]</text>
              </svg>
            </div>
            <div>
              <h3><a href="#">Death Star vaporizes it's own planet</a>.</h3>
              <ul kemet-layout="flexlist" kemet-gutters>
                <li>By Thadeus<li>
                <li>11/23/16<li>
                <li>6 Comments<li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
            </div>
          </div>
          <hr />
          <div kemet-layout="flexrow" kemet-gutters kemet-autostack>
            <div kemet-breakpoint="tiny:100 small:40">
              <svg width="100%" height="150">
                <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Thumbnail]</text>
              </svg>
            </div>
            <div>
              <h3><a href="#">Death Star vaporizes it's own planet</a>.</h3>
              <ul kemet-layout="flexlist" kemet-gutters>
                <li>By Thadeus<li>
                <li>11/23/16<li>
                <li>6 Comments<li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
            </div>
          </div>
          <hr />
          <div kemet-layout="flexrow" kemet-gutters kemet-autostack>
            <div kemet-breakpoint="tiny:100 small:40">
              <svg width="100%" height="150">
                <rect x="0" y="0" width="100%" height="100%" fill="#0c4a6e"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="2rem">[Thumbnail]</text>
              </svg>
            </div>
            <div>
              <h3><a href="#">Death Star vaporizes it's own planet</a>.</h3>
              <ul kemet-layout="flexlist" kemet-gutters>
                <li>By Thadeus<li>
                <li>11/23/16<li>
                <li>6 Comments<li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
            </div>
          </div>
        </article>
        <aside kemet-breakpoint="tiny:100 medium:33">
          <div kemet-layout="flexgrid" kemet-gutters>
            <div kemet-breakpoint="tiny:33" kemet-type-align="center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="67px" id="twitter" style="enable-background:new 0 0 67 67;" version="1.1" viewBox="0 0 67 67" width="67px" xml:space="preserve"><path d="M38.167,22.283c-2.619,0.953-4.274,3.411-4.086,6.101  l0.063,1.038l-1.048-0.127c-3.813-0.487-7.145-2.139-9.974-4.915l-1.383-1.377l-0.356,1.017c-0.754,2.267-0.272,4.661,1.299,6.271  c0.838,0.89,0.649,1.017-0.796,0.487c-0.503-0.169-0.943-0.296-0.985-0.233c-0.146,0.149,0.356,2.076,0.754,2.839  c0.545,1.06,1.655,2.097,2.871,2.712l1.027,0.487l-1.215,0.021c-1.173,0-1.215,0.021-1.089,0.467  c0.419,1.377,2.074,2.839,3.918,3.475l1.299,0.444l-1.131,0.678c-1.676,0.976-3.646,1.526-5.616,1.567  C20.775,43.256,20,43.341,20,43.405c0,0.211,2.557,1.397,4.044,1.864c4.463,1.377,9.765,0.783,13.746-1.568  c2.829-1.674,5.657-5,6.978-8.221c0.713-1.715,1.425-4.851,1.425-6.354c0-0.975,0.063-1.102,1.236-2.267  c0.692-0.678,1.341-1.419,1.467-1.631c0.21-0.403,0.188-0.403-0.88-0.043c-1.781,0.636-2.033,0.551-1.152-0.402  c0.649-0.678,1.425-1.907,1.425-2.267c0-0.063-0.314,0.042-0.671,0.233c-0.377,0.212-1.215,0.53-1.844,0.72l-1.131,0.361l-1.027-0.7  c-0.566-0.381-1.361-0.805-1.781-0.932C40.766,21.902,39.131,21.944,38.167,22.283z M34,64C17.432,64,4,50.568,4,34  C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#598DCA;"/></svg>
              <p><div>56,000</div><div>Followers</div></p>
            </div>
            <div kemet-breakpoint="tiny:33" kemet-type-align="center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="67px" id="github" style="enable-background:new 0 0 67 67;" version="1.1" viewBox="0 0 67 67" width="67px" xml:space="preserve"><path d="M21.543,34.568c-0.054,0,0.592,1.367,0.61,1.367  c1.41,2.516,4.128,4.08,8.713,4.514c-0.654,0.488-1.44,1.414-1.549,2.484c-0.823,0.523-2.478,0.696-3.764,0.297  c-1.803-0.559-2.493-4.066-5.192-3.566c-0.584,0.107-0.468,0.486,0.037,0.809c0.823,0.523,1.597,1.178,2.194,2.571  c0.459,1.07,1.423,2.981,4.473,2.981c1.21,0,2.058-0.143,2.058-0.143s0.023,2.731,0.023,3.793c0,1.225-1.682,1.57-1.682,2.159  c0,0.233,0.557,0.255,1.004,0.255c0.884,0,2.723-0.725,2.723-1.998c0-1.011,0.017-4.41,0.017-5.006c0-1.3,0.709-1.712,0.709-1.712  s0.088,6.94-0.169,7.872c-0.302,1.094-0.847,0.939-0.847,1.427c0,0.726,2.214,0.179,2.948-1.416c0.567-1.239,0.319-8.05,0.319-8.05  l0.605-0.012c0,0,0.034,3.117,0.013,4.542c-0.021,1.476-0.122,3.342,0.77,4.222c0.586,0.579,2.484,1.594,2.484,0.666  c0-0.539-1.04-0.982-1.04-2.441v-6.715c0.831,0,0.706,2.208,0.706,2.208l0.061,4.103c0,0-0.184,1.494,1.645,2.119  c0.645,0.223,2.025,0.283,2.09-0.09c0.065-0.373-1.662-0.928-1.678-2.084c-0.01-0.707,0.032-1.119,0.032-4.187  c0-3.068-0.419-4.202-1.88-5.106c4.508-0.455,7.299-1.551,8.658-4.486c0.106,0.003,0.555-1.371,0.496-1.371  c0.305-1.108,0.47-2.419,0.502-3.971c-0.008-4.21-2.058-5.699-2.451-6.398c0.58-3.187-0.098-4.637-0.412-5.135  c-1.162-0.406-4.041,1.045-5.615,2.067c-2.564-0.737-7.986-0.666-10.019,0.19c-3.751-2.639-5.736-2.235-5.736-2.235  s-1.283,2.259-0.339,5.565c-1.234,1.546-2.154,2.64-2.154,5.539C20.906,31.83,21.102,33.292,21.543,34.568z M34,64  C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#333333;"/></svg>
              <p><div>56,000</div><div>Followers</div></p>
            </div>
            <div kemet-breakpoint="tiny:33" kemet-type-align="center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="67px" id="codepen" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" width="67px" xml:space="preserve"><circle cx="256" cy="256" id="ellipse" r="256"/><path d="M415.8,204.9c-0.1-0.4-0.1-0.8-0.2-1.1c-0.1-0.2-0.1-0.4-0.2-0.7c-0.1-0.3-0.2-0.7-0.4-1  c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.3-0.3-0.6-0.5-0.9c-0.1-0.2-0.2-0.4-0.4-0.6c-0.2-0.3-0.4-0.6-0.6-0.8c-0.1-0.2-0.3-0.4-0.5-0.6  c-0.2-0.3-0.4-0.5-0.7-0.7c-0.2-0.2-0.4-0.4-0.5-0.5c-0.2-0.2-0.5-0.4-0.8-0.7c-0.2-0.2-0.4-0.3-0.6-0.5c-0.1-0.1-0.1-0.1-0.2-0.2  L263.6,98.3c-4.6-3.1-10.6-3.1-15.3,0l-146.3,97.5c-0.1,0.1-0.1,0.1-0.2,0.2c-0.2,0.1-0.4,0.3-0.6,0.5c-0.3,0.2-0.5,0.4-0.8,0.7  c-0.2,0.2-0.4,0.4-0.5,0.5c-0.2,0.2-0.5,0.5-0.7,0.7c-0.2,0.2-0.3,0.4-0.5,0.6c-0.2,0.3-0.4,0.6-0.6,0.8c-0.1,0.2-0.3,0.4-0.4,0.6  c-0.2,0.3-0.3,0.6-0.5,0.9c-0.1,0.2-0.2,0.4-0.3,0.7c-0.1,0.3-0.2,0.7-0.4,1c-0.1,0.2-0.1,0.4-0.2,0.7c-0.1,0.4-0.2,0.8-0.2,1.1  c0,0.2-0.1,0.4-0.1,0.6c-0.1,0.6-0.1,1.2-0.1,1.8v97.5c0,0.6,0,1.2,0.1,1.8c0,0.2,0.1,0.4,0.1,0.6c0.1,0.4,0.1,0.8,0.2,1.2  c0.1,0.2,0.1,0.4,0.2,0.7c0.1,0.3,0.2,0.7,0.4,1c0.1,0.2,0.2,0.4,0.3,0.7c0.1,0.3,0.3,0.6,0.5,0.9c0.1,0.2,0.3,0.4,0.4,0.6  c0.2,0.3,0.4,0.6,0.6,0.8c0.1,0.2,0.3,0.4,0.5,0.6c0.2,0.3,0.4,0.5,0.7,0.7c0.2,0.2,0.4,0.4,0.5,0.5c0.2,0.2,0.5,0.4,0.8,0.7  c0.2,0.2,0.4,0.3,0.6,0.5c0.1,0.1,0.1,0.1,0.2,0.2l146.3,97.5c2.3,1.5,5,2.3,7.6,2.3c2.7,0,5.3-0.8,7.6-2.3l146.3-97.5  c0.1-0.1,0.2-0.1,0.2-0.2c0.2-0.2,0.4-0.3,0.6-0.5c0.3-0.2,0.5-0.4,0.8-0.7c0.2-0.2,0.4-0.4,0.5-0.5c0.2-0.2,0.5-0.5,0.7-0.7  c0.2-0.2,0.3-0.4,0.5-0.6c0.2-0.3,0.4-0.6,0.6-0.8c0.1-0.2,0.3-0.4,0.4-0.6c0.2-0.3,0.3-0.6,0.5-0.9c0.1-0.2,0.2-0.4,0.3-0.7  c0.1-0.3,0.2-0.7,0.4-1c0.1-0.2,0.2-0.4,0.2-0.7c0.1-0.4,0.2-0.8,0.2-1.2c0-0.2,0.1-0.4,0.1-0.6c0.1-0.6,0.1-1.2,0.1-1.8v-97.5  c0-0.6,0-1.2-0.1-1.8C415.9,205.2,415.8,205.1,415.8,204.9z M256,288.5L207.4,256l48.6-32.5l48.6,32.5L256,288.5z M242.3,199.6  l-59.6,39.9l-48.1-32.2l107.7-71.8C242.3,135.4,242.3,199.6,242.3,199.6z M157.9,256l-34.4,23v-46L157.9,256z M182.6,272.5  l59.6,39.9v64.1l-107.7-71.8L182.6,272.5z M269.7,312.4l59.6-39.9l48.1,32.2l-107.7,71.8V312.4z M354.1,256l34.4-23v46L354.1,256z   M329.4,239.5l-59.6-39.9v-64.1l107.7,71.8L329.4,239.5z" fill="#FFFFFF"/></svg>
              <p><div>56,000</div><div>Followers</div></p>
            </div>
            <div kemet-breakpoint="tiny:33" kemet-type-align="center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512" height="67px" id="linkedin" version="1.1" viewBox="0 0 512 512" width="67px" xml:space="preserve"><g><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="8.9756" x2="577.923" y1="-78.99" y2="557.6892"><stop offset="0" style="stop-color:#517FA6"/><stop offset="1" style="stop-color:#426699"/></linearGradient><path d="M271.06,214.363v-0.525c-0.1,0.17-0.247,0.36-0.347,0.525H271.06z" fill="url(#SVGID_1_)"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_2_" x1="-20.1191" x2="548.8283" y1="-52.9904" y2="583.6888"><stop offset="0" style="stop-color:#517FA6"/><stop offset="1" style="stop-color:#426699"/></linearGradient><path d="M256,7.098C118.535,7.098,7.098,118.535,7.098,256c0,137.465,111.437,248.902,248.902,248.902   c137.465,0,248.902-111.437,248.902-248.902C504.902,118.535,393.465,7.098,256,7.098z M187.455,352.802h-53.822V190.89h53.822   V352.802z M160.554,168.794h-0.363c-18.058,0-29.755-12.445-29.755-27.992c0-15.886,12.052-27.969,30.465-27.969   c18.421,0,29.747,12.083,30.102,27.969C191.004,156.349,179.323,168.794,160.554,168.794z M381.564,352.805h-53.822v-86.627   c0-21.759-7.792-36.613-27.271-36.613c-14.875,0-23.725,10.008-27.624,19.687c-1.42,3.464-1.783,8.276-1.783,13.125v90.425h-53.83   c0,0,0.718-146.718,0-161.912h53.827v22.948c7.149-11.015,19.927-26.754,48.518-26.754c35.43,0,61.983,23.138,61.986,72.871   V352.805z" fill="url(#SVGID_2_)"/></g></svg>
              <p><div>56,000</div><div>Followers</div></p>
            </div>
            <div kemet-breakpoint="tiny:33" kemet-type-align="center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512" height="67px" id="youtube" version="1.1" viewBox="0 0 512 512" width="67px" xml:space="preserve"><g><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="29.8503" x2="443.0858" y1="48.8522" y2="462.0877"><stop offset="0" style="stop-color:#DD272D"/><stop offset="0.5153" style="stop-color:#CA2429"/><stop offset="1" style="stop-color:#B22025"/></linearGradient><polygon fill="url(#SVGID_1_)" points="217.949,313.149 313.196,256 217.949,198.851  "/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_2_" x1="39.3513" x2="452.5868" y1="39.3513" y2="452.5867"><stop offset="0" style="stop-color:#DD272D"/><stop offset="0.5153" style="stop-color:#CA2429"/><stop offset="1" style="stop-color:#B22025"/></linearGradient><path d="M256,7.098C118.535,7.098,7.098,118.535,7.098,256c0,137.465,111.437,248.902,248.902,248.902   c137.465,0,248.902-111.437,248.902-248.902C504.902,118.535,393.465,7.098,256,7.098z M408.349,268.287   c0,26.307-3.048,52.605-3.048,52.605s-2.981,22.402-12.106,32.251c-11.592,12.935-24.574,13.011-30.527,13.773   C320.026,370.183,256,370.297,256,370.297s-79.227-0.771-103.601-3.267c-6.782-1.353-21.993-0.962-33.594-13.897   c-9.134-9.849-12.106-32.251-12.106-32.251s-3.048-26.289-3.048-52.605v-24.65c0-26.298,3.048-52.596,3.048-52.596   s2.981-22.412,12.106-32.279c11.601-12.935,24.574-13.011,30.527-13.744c42.633-3.305,106.592-3.305,106.592-3.305h0.143   c0,0,63.959,0,106.601,3.305c5.953,0.733,18.935,0.81,30.527,13.744c9.134,9.868,12.106,32.279,12.106,32.279   s3.048,26.298,3.048,52.605V268.287z" fill="url(#SVGID_2_)"/></g></svg>
              <p><div>56,000</div><div>Followers</div></p>
            </div>
            <div kemet-breakpoint="tiny:33" kemet-type-align="center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64" height="67px" version="1.1" viewBox="0 0 64 64" width="67px" xml:space="preserve"><g id="Layer_1"><g><circle cx="32" cy="32" fill="#C75C5C" r="32"/></g><g opacity="0.2"><g><path d="M49.982,31.003c-0.094-5.522-4.574-10.442-10.107-10.442c-3.2,0-6.019,1.674-7.875,4.131     c-1.856-2.457-4.676-4.131-7.875-4.131c-5.533,0-10.012,4.921-10.107,10.442H14c0,0.034,0.007,0.065,0.007,0.099     c0,0.025-0.007,0.049-0.007,0.076c0,0.155,0.038,0.272,0.045,0.421c0.495,14.071,17.813,19.84,17.813,19.84     s17.572-5.762,18.092-19.818C49.959,31.464,50,31.34,50,31.178c0-0.027-0.007-0.052-0.007-0.076c0-0.036,0.007-0.065,0.007-0.099     H49.982z" fill="#231F20"/></g></g><g><g><path d="M49.982,29.003c-0.094-5.522-4.574-10.442-10.107-10.442c-3.2,0-6.019,1.674-7.875,4.131     c-1.856-2.457-4.676-4.131-7.875-4.131c-5.533,0-10.012,4.921-10.107,10.442H14c0,0.034,0.007,0.065,0.007,0.099     c0,0.025-0.007,0.049-0.007,0.076c0,0.155,0.038,0.272,0.045,0.421c0.495,14.071,17.813,19.84,17.813,19.84     s17.572-5.762,18.092-19.818C49.959,29.464,50,29.34,50,29.178c0-0.027-0.007-0.052-0.007-0.076c0-0.036,0.007-0.065,0.007-0.099     H49.982z" fill="#FFFFFF"/></g></g></g><g id="heart"/></svg>
              <p><div>56,000</div><div>Followers</div></p>
            </div>
          </div>
          <br />
          <h3>From our friends.</h3>
          <dummy-element label="Buy Me!" height="200px"></dummy-element>
          <br />

          <h3>Trending Posts</h3>
          <div kemet-layout="flexrow" kemet-gutters>
            <div kemet-breakpoint="tiny:content">
              <img src="https://via.placeholder.com/100x100" alt="a placeholder" />
            </div>
            <h4>All I need is a space suit and I'm ready to go.</h4>
          </div>
          <br />

          <div kemet-layout="flexrow" kemet-gutters>
            <div kemet-breakpoint="tiny:content">
              <img src="https://via.placeholder.com/100x100" alt="a placeholder" />
            </div>
            <h4>All I need is a space suit and I'm ready to go.</h4>
          </div>
          <br />

          <div kemet-layout="flexrow" kemet-gutters>
            <div kemet-breakpoint="tiny:content">
              <img src="https://via.placeholder.com/100x100" alt="a placeholder" />
            </div>
            <h4>All I need is a space suit and I'm ready to go.</h4>
          </div>
          <br />

          <div kemet-layout="flexrow" kemet-gutters>
            <div kemet-breakpoint="tiny:content">
              <img src="https://via.placeholder.com/100x100" alt="a placeholder" />
            </div>
            <h4>All I need is a space suit and I'm ready to go.</h4>
          </div>
        </aside>
      </div>
    </section>

    <section>
      <div kemet-layout="flexgrid" kemet-gutters>
        <div kemet-breakpoint="tiny:100 large:33">
          <h3>Flickr Images</h3>
          <ul kemet-layout="flexlist" kemet-gutters="tiny:minus-3">
            <li><img src="https://via.placeholder.com/75x75" alt="a placeholder" /></li>
            <li><img src="https://via.placeholder.com/75x75" alt="a placeholder" /></li>
            <li><img src="https://via.placeholder.com/75x75" alt="a placeholder" /></li>
            <li><img src="https://via.placeholder.com/75x75" alt="a placeholder" /></li>
            <li><img src="https://via.placeholder.com/75x75" alt="a placeholder" /></li>
            <li><img src="https://via.placeholder.com/75x75" alt="a placeholder" /></li>
            <li><img src="https://via.placeholder.com/75x75" alt="a placeholder" /></li>
            <li><img src="https://via.placeholder.com/75x75" alt="a placeholder" /></li>
          </ul>
        </div>
        <div kemet-breakpoint="tiny:100 medium:50 large:33">
          <h3>Flickr Images</h3>
          <ul>
            <li>Space</li>
            <li>Galaxies</li>
            <li>Milky Way</li>
            <li>Black Holes</li>
            <li>Rebels</li>
            <li>Death Star</li>
            <li>Republic</li>
            <li>R2D2</li>
          </ul>
        </div>
        <div kemet-breakpoint="tiny:100 medium:50 large:33">
          <h3>Random Mag</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quam voluptatum vel repellat ab similique molestias molestiae ea omnis eos, id asperiores est praesentium, voluptate officia nulla aspernatur sequi aliquam.</p>
        </div>
      </div>
    </section>
  </main>
`;
export const News = NewsTemplate.bind({});
