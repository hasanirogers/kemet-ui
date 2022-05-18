import { html } from 'lit';
import './kemet-svgs.js';
import './kemet-svg.js';

const getViewBox = (svg) => {
  let viewBox;

  switch (svg) {
    case 'anubis': viewBox = '0 0 512 512';
      break;
    case 'eye': viewBox = '0 0 706 500';
      break;
    case 'horus': viewBox = '0 0 1359.5 1027';
      break;
    default: viewBox = '0 0 512 512';
  }

  return viewBox;
};

const Template = ({
  svg = 'anubis',
}) => html`
  <kemet-svgs set="svgs">
    <svg>
      <defs>
        <g id="anubis">
          <path d="M201 5.5c-1.5 1.8-.9 5.6 2.7 17.5 2.5 8.4 2.7 8.5 12 17.4 32.9 31.1 53.3 67.7 56.8 101.9l.7 6.8 6.6 3c3.6 1.6 6.7 2.8 6.9 2.6.5-.5-7-26.4-11-38.2-6-17.4-10.6-28.5-19.2-46-12.9-26.2-26.8-46.2-41.6-59.9-7.4-6.9-11.3-8.3-13.9-5.1z"></path><path d="M168.5 17c-.3.6 5.9 20.5 13.9 44.3 20.3 60.4 26.1 82 27.3 100.8.5 8.6.3 10.2-1.6 14-5 10.2-14.4 17.3-40.8 30.8-15.4 7.8-21.1 11.2-23.5 14.1-1.8 2.1-7.3 10.5-12.3 18.6-12.6 20.7-22.5 34.4-31.9 44.2-6.5 6.7-12.2 11.1-28.1 21.7-31.3 20.6-41.1 29.4-40.3 36.2.2 2.2 1.8 3.8 7.3 7.5C48.6 356.1 61 362 65 362c2 0 8.8-2.3 15.5-5.1 28.4-12.1 63.7-25 75.5-27.5 5.6-1.2 8.3-1.1 20 .2 15.1 1.8 27.1 1.4 34.2-1.1 5.3-1.9 11.8-7.6 14.5-12.9l1.8-3.4 6 8.9c3.3 4.8 6.4 8.7 6.9 8.6.5-.2 1.5-1.2 2.2-2.3 1.2-1.7.5-3.7-6-16.6-10.1-20-12.1-26.2-10.7-33 .7-2.9 3.4-9.4 6.1-14.3 11.1-20 16.2-33.1 23-59.7 9.8-38.7 10.5-56.5 2.9-81.6-6.8-22.5-29.7-55-60.9-86.3-15.5-15.5-25.4-22.3-27.5-18.9zm58 174c0 3-31.3 27.8-41.5 33-3 1.5-8.2 3.5-11.4 4.5-13.1 3.7-21.8 10.1-26.5 19.4-2.4 4.5-3.8 5.8-5.3 4.3-2.5-2.5 8.6-17 16.8-21.8 2.3-1.4 8.8-4 14.4-5.8 12.8-4.3 27.6-14.2 47.5-32 4-3.5 6-4.1 6-1.6zm-3.1 14.6c4.7 1.8-2 8-29.2 26.5-11.1 7.6-11.6 8.1-14.9 14.9-4.6 9.4-8.3 11.9-19 12.9-7 .6-8.5 1.1-13 4.4-5.6 4.1-6.5 4.4-8.3 2.2-1-1.2-.7-1.9 1.6-4 1.6-1.5 4.1-3.4 5.6-4.3 1.5-.9 3.3-3 4-4.6 3.2-7.8 13-14.8 25.3-18 6.4-1.7 14.1-6.5 34-21.5 6.6-5 12.1-9.1 12.2-9.1.1 0 .8.3 1.7.6z"></path><path d="M273.2 175.2c-5 36.6-15.3 69-27.4 86.6-3.6 5.3-7.9 15.5-8 19.1-.1 1.5 2.1 7.6 4.7 13.6 9.6 22.1 11.2 29.3 7.6 35.1-2.1 3.4-7.4 7.8-10.6 8.8-1.4.4-2.7 2.7-4.3 7.3-3.5 10.1-12.2 27.8-17.6 36.1-2.7 4-7.7 10.4-11.1 14.1-12.1 13.2-24.6 41-41.6 92.1l-5.8 17.5 17.7.3c9.7.1 18.1.1 18.8-.2.6-.2 1.4-4.6 1.8-10.8 2.3-35.4 11.5-71.4 22.3-87.1 6.9-10 37.7-27.5 72.3-41.2 36.2-14.2 73.2-23.6 111-28.1 15.8-1.8 55.2-2.5 67.7-1.1l7.2.8-1.1-3.2c-2.2-6.4-11.5-23.6-18.1-33.6-27-40.9-69.6-79.1-125.2-112.3-11.7-7-55.8-30-57.5-30-.3 0-1.6 7.3-2.8 16.2zm28.8 23.4c54.2 30 97.6 68.3 126.6 111.9 4 6.1 7.4 11.5 7.4 11.8 0 .4-3.4.7-7.5.7h-7.4l-5-7.3c-26.3-39-68.4-75.9-119.1-104.6-6.9-3.8-13-7.4-13.6-7.8-1.5-1 .4-13.3 2-13.3.6 0 8.1 3.9 16.6 8.6zm-11.5 31.7c34.3 22.8 63.8 50.8 89.8 85.4 4.2 5.6 7.7 10.4 7.7 10.6 0 .3-3.2 1.1-7.1 1.7-6.9 1.2-7.1 1.2-8.7-1.1-4.1-5.9-16.2-20.4-25.5-30.7-17.3-19.2-41.7-40.1-63.6-54.7l-9.9-6.6 2.1-6.4c2.4-7.4 1.1-7.6 15.2 1.8zm-11.9 36.4c14.8 12.3 34.8 32 45.1 44.3 8.1 9.8 18.5 24.1 17.9 24.7-.2.2-3.1 1.2-6.5 2.3l-6 1.8-6.6-8.8c-13.4-18-35.4-40.3-56.4-57.3l-7.8-6.3 3.1-5.7c1.7-3.1 3.4-5.7 3.7-5.7.3 0 6.4 4.8 13.5 10.7zm-5.6 50.5c8.2 12.2 19.5 33.7 18.2 34.8-.9.8-11.5 5.1-11.7 4.8 0-.2-1-2.3-2-4.7-1.1-2.4-4.3-8.7-7.2-13.9-4.8-8.7-5.3-10.2-5.3-15.8 0-4.3-.9-9-3-15.1l-2.9-8.8 2.9 3.5c1.7 1.9 6.6 8.8 11 15.2zm-20.6 38.5c1.1 13.6 1.4 12.8-5.7 16.8-3.5 1.9-6.7 3.5-7 3.5-1.6 0-.5-5.2 2.7-12.6 1.9-4.3 4.1-9.6 5-11.7 2.5-6.1 4.2-4.8 5 4z"></path><path d="M442.4 354.8c-.6.4-2.3 4.5-3.7 9.2-11.4 37.3-41.5 70.3-83.3 91.3-33.7 16.9-69.6 25.6-128.9 31.3l-5.1.5.8 9.6c.4 5.3.9 9.7 1 9.9.8.7 22.9 3.4 33.3 3.9 29.8 1.7 68.8-4.9 98.2-16.6 38.7-15.3 78.3-45 99.6-74.6 13.9-19.4 23.7-44.8 23.7-61.4V354h-17.2c-9.5 0-17.8.4-18.4.8z"></path><path d="M414.5 356.8c-7.5.7-33 4.5-42 6.3-46.6 9.3-85.6 24.5-117.3 45.6-14.9 9.9-20.8 15.8-25.5 25.4-4.1 8.3-7.7 21.1-7.7 27.1v3.8h4.8c13 0 47.6-5.3 68.2-10.5 24.4-6.1 49.1-16.1 65.9-26.6 24.5-15.4 43.6-36.6 53.3-59.1 4.5-10.5 4.6-12.4.3-12z"></path>
        </g>
        <g id="eye">
          <defs id="defs2214"/>
          <path d="M 482.47122,483.65668 C 482.09821,481.16923 482.00349,468.19138 482.26073,454.81702 C 482.85598,423.86986 485.74029,409.33575 508.02304,325 C 517.97202,287.34512 518.96876,261.67667 510.62952,257.87706 C 503.22084,254.50144 495.51948,258.76554 483.33874,272.98748 C 444.87758,317.89379 384.416,371.63828 336.592,403.43111 C 234.38064,471.38003 125.75165,495.91654 61.5,465.56738 C 14.135995,443.19507 -9.4559604,386.23292 7.5301438,335.2586 C 23.728797,286.64738 86.775557,268.60992 123.4217,302.10244 C 141.67589,318.78573 137.19751,348.25122 114.70406,359.46018 C 96.526568,368.51841 73.570329,349.94535 79.65551,331.10368 C 81.787859,324.50125 81.436951,324.28716 72.953651,327.0149 C 23.293219,342.98286 33.831342,415.54173 88.682829,435.31611 C 152.06988,458.16762 251.76781,426.54376 351.5,351.95135 C 391.05504,322.36706 438.67015,273.24845 433.13368,267.73999 C 431.50743,266.12196 409.19769,266.53511 388,268.57582 C 325.73643,274.56995 251.40446,262.42665 164,231.98188 C 152.725,228.05456 136.525,222.43341 128,219.49042 C 109.63237,213.14958 75.226122,204.4179 51.5,200.07611 C 42.15,198.3651 33.478754,196.73725 32.230564,196.45866 L 29.961129,195.95214 L 30.230564,174.3183 L 30.5,152.68446 L 39,150.74391 C 72.50072,143.09568 128.76294,128.99955 175,116.66999 C 278.32991,89.11608 289.32495,86.38305 310.5,82.98883 C 383.04703,71.36 422.7219,78.62443 574.31118,131.29245 C 602.82103,141.19788 634.45188,143.67699 662.03604,138.16802 C 668.38086,136.90086 675.54332,136.00717 677.95262,136.18205 L 682.33316,136.5 L 691.61566,157 C 696.72104,168.275 700.92108,177.75395 700.94908,178.06434 C 700.97709,178.37472 694.8125,179.42018 687.25,180.38758 C 628.89838,187.85196 595.69886,201.31776 576.89325,225.14854 C 562.86714,242.92267 559.1993,250.80358 556.38741,269.20848 C 552.05483,297.56695 558.59871,307.69047 590.22312,321.55294 C 598.33549,325.10898 598.36533,325.2104 591.75,326.74292 C 566.33045,332.63166 554.58404,346.42334 542.01437,385.13842 C 521.75002,447.55347 501.97616,483.58514 485.82472,487.52648 C 483.28485,488.14627 483.11511,487.95039 482.47122,483.65668 z M 424.2218,225.63181 C 474.97905,220.35891 533.69333,201.01428 568.3406,178.14891 L 572.18119,175.61432 L 564.6736,171.83682 C 544.62325,161.74834 515.9203,151.09439 477.85766,139.61248 C 468.37374,136.75158 435.02218,129.50425 417.73035,126.54674 L 413.96069,125.902 L 414.73035,130.201 C 421.33896,167.11429 399.13266,191.38005 360.2101,189.77757 C 325.46755,188.34718 305.90676,167.5813 310.49936,137.00427 C 311.3496,131.34347 311.86562,126.53229 311.64607,126.31274 C 310.91615,125.58281 254.01865,138.94051 216.75536,148.59001 C 184.37601,156.9748 143.86144,166.87973 118,172.73355 L 109.5,174.65755 L 123,178.84822 C 130.425,181.15309 154.725,189.0744 177,196.45112 C 234.90395,215.62695 267.37147,222.92242 312.89555,226.98694 C 328.35761,228.36743 407.1171,227.40873 424.2218,225.63181 z M 35.354897,110.38623 C 35.716536,99.99881 36.572127,87.9 37.256211,83.5 L 38.5,75.5 L 56.5,75.47117 C 89.061602,75.41901 105.13604,71.29991 198.5,39.083437 C 273.3851,13.243341 349.47211,3.065576 403.05014,11.721825 C 448.7358,19.102957 499.55051,32.310146 558,51.99465 C 615.37673,71.31787 646.14746,74.42614 681.5,64.46987 C 684.63769,63.58621 703.5919,96.68847 701.36023,99.15444 C 699.55859,101.14524 692.34416,104.11236 682,107.11686 C 671.59412,110.13927 628.62391,111.07697 614.24412,108.59543 C 603.42274,106.72796 561.07836,94.69295 532.5,85.36232 C 458.57731,61.22709 370.02847,49.18587 319,56.32973 C 273.61484,62.68354 255.87256,67.04951 198.71398,85.92932 C 131.51605,108.12519 72.656502,123.90207 39.598686,128.57904 L 34.697371,129.27247 L 35.354897,110.38623 z " style="fill:#000000" id="path2223"/>
        </g>
        <g id="horus">
          <style type="text/css">.st0{fill:#000;} .st1{fill:fff;} .st2{fill:#000;} .st3{fill:#fff;}</style>
          <path class="st0" d="M1049.5,304.2c0,0,167.6,67.4,115.3,92.3C1112.5,421.5,1055.4,406.6,1049.5,304.2z M708.9,21.3 c0,0-18,79.6,26.9,155.4c0,0-222.2-27-446.9,36c0,0-28.3,60.4,5.1,133.6c0,0-195.3,74.5-289,170.8c0,0,219.6,41.1,197.9,258.2 c0,0,232.5-33.4,521.5,251.7c88.6-475.4,426.2-668.3,625.5-450.8c0,0,60.4-133.6-122-231.2c0,0-19.3-93.7-187.5-132.3 c0,0-66.8-28.3-100.2-98.9c0,0-10.3,12.9-14.2,51.4C925.9,165.2,764.2,36.7,708.9,21.3L708.9,21.3z"/>
          <path class="st1" d="M509.8,4.6c0,0-61.6,77.1-77,129.6L737.2,345l-1.5,1.3L409.6,192.2c0,0-18,27-29.6,111.7 c0,0,186.5,81.4,326.4,96.1c-0.2,1-0.3,2.1-0.5,3.1c-38,2.1-138.1,2.7-331.1-27.3c0,0-16.7,107.9,27,178.5 c0,0,199.8-88.8,306.2-114.8c0.4,1.4,0.8,2.9,1.3,4.3C662.1,470.7,495.9,567.1,430,627.5c0,0,30.8,89.9,97.7,128.5 c0,0,147.5-222.4,199.3-280l2.3,2.5c-18.1,32.4-162,289.5-164.4,317.3c0,0,78.4,69.4,163.1,92.5c0,0-39.4-246.4,63.8-379.3 c2.3,0.2,4.5,0.3,6.8,0.3c22.4,0,44.1-8.1,61.1-22.8c8.7-6.7,15.8-15.3,20.7-25.1c16.7-29.8,15.9-66.3-2.1-95.3 c-11.2-22-32.1-37.3-56.4-41.3c-17.4-4.6-35.9-4-52.9,1.9C767.9,325.8,549.5,127.6,509.8,4.6L509.8,4.6z"/>
          <path class="st2" d="M1159.9,487.1c0,0-198-10.1-346.9,64.4c0,0-49.1,101.7-34.5,185.3C778.4,736.9,938.2,510.7,1159.9,487.1z M1164.4,367.2c0,0-56.3-67.2-137.1-101.7c0,0,19.1,56.3,26.4,74.5l1-30.6C1054.6,309.3,1108,324.5,1164.4,367.2z"/>
          <g>
            <path class="st3" d="M769.1,326.8L475.5,52.1l34.3-47.5C509.8,4.6,516.6,58.2,769.1,326.8z M735.6,346.5l-326-154.3 c-8.9,17-15.1,35.4-18.3,54.3L735.6,346.5z M706,403.2c0,0-128.4,7.1-331.1-27.3c0,0-8.4,66.4,0.2,100L706,403.2z M709.5,443.9 c0,0-210.2,117.8-279.3,183.7c0,0,15.3,39.8,27.6,56.6L709.5,443.9z M729.4,478.5c0,0-122.2,215.4-164.4,317.3 c0,0,33,27.9,59.4,44.1L729.4,478.5z M813.2,340.1C856,363.2,872,416.6,849,459.4c-8.2,15.2-20.6,27.6-35.8,35.8 c42.8-4,74.3-42,70.2-84.8C879.9,373.1,850.4,343.6,813.2,340.1z"/>
          </g>
        </g>
      </defs>
    </svg>
  </kemet-svgs>
  <kemet-svg set="svgs" svg="${svg}" viewbox="${getViewBox(svg)}"></kemet-svg>
`;

export const Standard = Template.bind({});
Standard.args = {
  svg: 'anubis',
};
Standard.argTypes = {
  svg: {
    control: { type: 'select' },
    options: ['anubis', 'eye', 'horus'],
  },
};
