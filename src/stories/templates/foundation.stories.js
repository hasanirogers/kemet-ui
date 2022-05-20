import { html } from 'lit';

const AgencyTemplate = () => html`
  <header kemet-layout="flexrow" kemet-align="middle" kemet-autostack style="background-color:#eeeeee;">
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
  <header kemet-layout="flexrow" kemet-align="middle" kemet-autostack style="background-color:#eeeeee;">
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
  <header kemet-layout="flexrow" kemet-align="middle" kemet-autostack style="background-color:#eeeeee;">
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
export const News = NewsTemplate.bind({});
