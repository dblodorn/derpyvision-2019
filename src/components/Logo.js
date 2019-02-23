import React from 'react'
import styled from 'styled-components'
import { absoluteCentered, animationFadeIn } from '../styles/mixins';

export default () =>
  <LogoWrapper>
    <svg width="3517px" height="500px" viewBox="0 0 3517 377" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>DERPY VISION</title>
      <defs>
        <filter id="shadow" y="-1540%" x="-150%" height="3500%" width="300%">
          <feTurbulence type="turbulence" baseFrequency="0.5"
            numOctaves="5" result="turbulence"/>
          <feDisplacementMap id="disp" in2="turbulence" in="SourceGraphic"
            scale="10" xChannelSelector="R" yChannelSelector="G"/>
          <feDropShadow dx="12" dy="20" stdDeviation="40"/>
        </filter>
        
      </defs>
      <animate 
        xlinkHref="#disp"
        attributeType="XML"
        attributeName="scale"
        from="1000"
        to="10"
        dur="3s"
        repeatCount="0"
      />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" filter={`url(#shadow)`}>
        <g id="Derpy-Vision-Long" fillRule="nonzero" fill="pink">
          <g id="Group" transform="translate(23.000000, 41.000000)">
            <g id="derpy-vision-box">
              <path d="M0.625682,7.300109 L177.653328,7.300109 C307.230265,7.300109 400.306657,70.081048 400.306657,156.952346 C400.306657,243.823645 307.230265,306.604583 177.653328,306.604583 L0.625682,306.604583 L28.001091,262.803929 L28.001091,51.100764 L0.625682,7.300109 Z M150.277919,244.553656 L183.12841,244.553656 C251.019425,244.553656 299.930156,207.323099 299.930156,156.952346 C299.930156,106.581593 251.019425,69.351037 183.12841,69.351037 L150.277919,69.351037 C133.122663,69.351037 121.077483,81.396217 121.077483,98.551473 L121.077483,215.353219 C121.077483,232.508476 133.122663,244.553656 150.277919,244.553656 Z M491.900327,29.200437 L491.900327,277.404147 L464.524918,306.604583 L641.552564,306.604583 L641.552564,242.728629 C622.937286,257.693852 586.801746,268.27901 553.951255,268.27901 L532.050928,268.27901 L532.050928,173.377592 C532.050928,164.982466 538.25602,158.777374 546.651146,158.777374 C553.221244,158.777374 570.3765,159.507384 584.976719,160.602401 L608.702073,162.427428 L608.702073,127.75191 L584.976719,129.576937 C571.836522,130.671953 554.681266,131.401964 546.651146,131.401964 C538.25602,131.401964 532.050928,125.196872 532.050928,116.801746 L532.050928,38.325573 L553.951255,38.325573 C586.801746,38.325573 622.937286,48.910731 641.552564,63.875955 L641.552564,0 L464.524918,0 L491.900327,29.200437 Z M776.675518,166.176064 L787.260677,95 L752.950164,95 L767.550382,146.100764 L767.550382,288.452892 L742,306.703165 L818.651146,306.703165 L800.400873,290.277919 C786.895671,277.502728 776.675518,249.032303 776.675518,222.75191 C776.675518,177.491233 799.305857,144.275737 831.426337,144.275737 L831.426337,95 C813.906075,95 792.370753,124.930447 780.325573,166.176064 L776.675518,166.176064 Z M1126.07857,194.97781 C1079.72288,194.97781 1031.54216,183.662641 1011.10186,167.602401 L1007.4518,167.602401 L1007.4518,264.328847 L1034.82721,306.304474 L887,306.304474 L914.37541,264.328847 L914.37541,50.800655 L887,7 L1122.42852,7 C1206.74478,7 1268.4307,46.785595 1268.4307,101.901419 C1268.4307,155.922226 1208.93481,194.97781 1126.07857,194.97781 Z M1008,127.400873 L1039.02546,132.875955 C1110.20153,144.921135 1161.30229,135.795999 1161.30229,110.975627 C1161.30229,86.885267 1127.35678,69 1081.00109,69 L1037.20044,69 C1020.04518,69 1008,81.04518 1008,98.200437 L1008,127.400873 Z M1560.89814,306.954529 L1533.52274,272.27901 L1531.69771,219.353219 C1529.87268,158.762314 1583.52848,75.906075 1659.44962,22.250273 L1685,4 L1553.59804,4 L1504.3223,139.052019 L1500.67224,139.052019 L1451.39651,4 L1309.04438,4 L1336.41979,22.250273 C1413.80095,74.081048 1468.18676,156.937286 1465.99673,219.353219 L1464.1717,272.27901 L1436.79629,306.954529 L1560.89814,306.954529 Z M2181.14951,40 L2037.97927,40 L1962.4609,192.61004 L1959.3143,192.61004 L1902.67552,40 L1740.62568,40 L1762.65187,57.306293 C1816.77337,100.729356 1887.57184,186.002183 1930.99491,260.261914 L1957.741,305.887596 L1964.03419,305.887596 L1990.78028,260.261914 C2034.51801,185.058203 2105.31648,99.785377 2159.12332,57.306293 L2181.14951,40 Z M2221.62568,59.465988 C2221.62568,77.716261 2226.03092,90.931975 2231.06548,90.931975 C2236.10004,90.931975 2240.50527,77.716261 2240.50527,59.465988 C2240.50527,41.215715 2236.10004,28 2231.06548,28 C2226.03092,28 2221.62568,41.215715 2221.62568,59.465988 Z M2229.23827,255.596944 C2229.23827,203.363405 2236.47545,143.892688 2246.54456,114 C2231.75555,117.775919 2209.4147,117.775919 2194.62568,114 L2219.79847,136.026191 L2219.79847,282.343034 L2197.77228,298.076028 L2257.55766,298.076028 L2241.82466,285.489633 C2234.58749,280.140415 2229.23827,267.23936 2229.23827,255.596944 Z M2430.97235,106.945071 C2484.77919,106.945071 2545.19389,117.328847 2575.08658,132.117861 L2575.08658,47.159695 C2542.67661,38.978538 2492.01637,33 2453.94252,33 C2369.29902,33 2307.62568,61.948709 2307.62568,102.225173 C2307.62568,177.114224 2503.65879,194.735177 2503.65879,218.649327 C2503.65879,227.145144 2475.3394,232.809022 2436.00691,232.809022 C2391.01055,232.809022 2336.88905,222.425246 2307.62568,208.580211 L2307.62568,291.021099 C2332.79847,300.146235 2388.17861,306.754093 2439.78283,306.754093 C2523.79702,306.754093 2584.52637,272.770826 2584.52637,226.515824 C2584.52637,143.445617 2360.17388,134.9498 2360.17388,114.811568 C2360.17388,110.40633 2389.75191,106.945071 2430.97235,106.945071 Z M2702.98436,298.460895 L2679.38487,281.154601 L2679.38487,48.306293 L2702.98436,31 L2641.62568,31 L2665.22517,48.306293 L2665.22517,281.154601 L2641.62568,298.460895 L2702.98436,298.460895 Z M2933.83521,33 C3036.09967,33 3110.04475,90.582758 3110.04475,169.877046 C3110.04475,249.171335 3036.09967,306.754093 2933.83521,306.754093 C2831.57076,306.754093 2757.62568,249.171335 2757.62568,169.877046 C2757.62568,90.582758 2831.57076,33 2933.83521,33 Z M2934.18333,107 C2871.25136,107 2825.62568,133.43143 2825.62568,169.931975 C2825.62568,206.432521 2871.25136,232.863951 2934.18333,232.863951 C2997.11531,232.863951 3042.74099,206.432521 3042.74099,169.931975 C3042.74099,133.43143 2997.11531,107 2934.18333,107 Z M3446.37977,66.892689 L3469.97926,37 L3375.5813,37 L3399.18079,66.892689 L3399.18079,189.61004 L3396.03419,189.61004 L3287.47653,37 L3172.62568,37 L3207.23826,73.185886 L3207.23826,268.275009 L3183.63877,298.167698 L3278.03674,298.167698 L3254.43724,268.275009 L3254.43724,112.518371 L3257.58384,112.518371 L3446.37977,304.460895 L3446.37977,66.892689 Z" id="DErPY-ViSION"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </LogoWrapper>

const LogoWrapper = styled.div`
  ${animationFadeIn(1000, 250)}
  width: 65vw;
  max-width: 65rem;
  height: 100%;
  position: relative;
  margin: auto;
  svg {
    ${absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: visible;
  }
`