import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
          <svg
        width="150.488pt"
        height="40.00pt"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 5 330.48 77.84">
        <defs/>
        <path id="shape0" transform="matrix(0.249606923077857 -0.000552585027454351 0.000552848115778408 0.249488140603626 96.1938253688105 4.38916272757309)" fill="#3f3f3f"
              strokeOpacity="0" stroke="#000000" strokeWidth="0" strokeLinecap="square" strokeLinejoin="bevel" 
              d="M131.445 0C155.797 0 178.618 6.414 199.907 19.243C221.195 32.072 237.862 49.976 249.907 72.956C261.952 95.936 267.975 121.815 267.975 150.592C267.975 179.37 261.92 205.346
                 249.812 228.521C237.703 251.696 221.068 269.762 199.907 282.718C178.745 295.674 156.315 302.153 132.615 302.153C109.44 302.153 87.6952 295.806 67.3818 283.112C47.0681 270.418
                 30.7593 252.255 18.4556 228.623C6.1518 204.99 0 178.785 0 150.008C0 121.62 5.9568 96 17.8706 73.148C29.7843 50.295 46.0931 32.391 66.7968 19.434C87.5002 6.478 109.05 0
                 131.445 0M134.572 15.041C109.185 15.041 88.6122 25.588 72.8549 46.682C57.0974 67.776 49.2187 102.154 49.2187 149.816C49.2187 201.506 57.2924 237.248 73.4399 257.04C89.5872
                 276.832 109.575 286.729 133.402 286.729C150.067 286.729 164.715 282.236 177.345 273.251C189.975 264.266 200.034 250.009 207.523 230.479C215.012 210.949 218.756 185.295 218.756
                 153.518C218.756 118.883 215.24 91.832 208.209 72.366C201.178 52.899 191.152 38.479 178.132 29.104C165.112 19.729 150.592 15.041 134.572 15.041"
                 />
        <path id="shape1" transform="matrix(0.249606923077857 -0.000552585027454351 0.000552848115778408 0.249488140603626 117.980936966673 4.20959381906799)" fill="#3f3f3f" strokeOpacity="0"
              stroke="#000000" strokeWidth="0" strokeLinecap="square" strokeLinejoin="bevel" 
              d="M203.715 28.5188L217.192 0.585L229.5 0.585L234.574 116.798L221.49 116.798C212.895 84.12 202.087 60.0337 189.067 44.5388C172.92 25.1363 153.649 15.435 131.254 15.435C107.036
                 15.435 87.3094 26.2425 72.0731 47.8575C56.8369 69.4725 49.2188 106.061 49.2188 157.624C49.2188 200.981 57.945 234.056 75.3975 256.849C90.24 276.116 111.071 285.75 137.891
                 285.75C161.329 285.75 164.174 288.747 196.729 279.207L201.064 292.21C172.749 307.519 162.311 302.153 132.626 302.153C108.536 302.153 86.4319 296.098 66.3131 283.989C46.1944
                 271.881 30.1125 254.466 18.0675 231.744C6.0225 209.023 0 184.121 0 157.039C0 128.261 6.2175 101.243 18.6525 75.9825C31.0875 50.7225 47.0062 31.7438 66.4087 19.0463C85.8112
                 6.34875 106.71 0 129.105 0C141.608 0 153.718 2.14875 165.437 6.44625C177.156 10.7438 189.915 18.1012 203.715 28.5188"/>
        <path id="shape01" transform="matrix(0.248349312542815 -0.0249795515493137 0.0222375757830775 0.220659270324066 142.404344766686 72.4095855506415)" fill="#3f3f3f" fillRule="evenodd"
              strokeOpacity="0" stroke="#000000" strokeWidth="0" strokeLinecap="square" strokeLinejoin="bevel" 
              d="M0 20.0326C19.0703 7.84613 38.9353 1.21168 59.595 0.129305C80.2548 -0.953077 100.808 4.75982 121.253 17.268C105.398 33.3362 88.1304 41.1692 69.4498 40.7669C35.8635 40.3061
                 19.1334 31.1924 0 20.0326Z" />
        <text id="shape2" textRendering="auto" transform="translate(39.014995433684, 78.3131224250726)" fill="#3f3f3f" strokeOpacity="0"
              stroke="#000000" strokeWidth="0" strokeLinecap="square" strokeLinejoin="bevel" letterSpacing="0" wordSpacing="0"
              style={{textAlign: "start", textAlignLast: "auto", fontFamily: "High Tower Text", fontSize: 40}}>
          <tspan x="0">uni</tspan>
        </text>
        <text id="shape02" textRendering="auto" transform="translate(176.038120093747, 78.3131224250726)" fill="#3f3f3f" strokeOpacity="0"
              stroke="#000000" strokeWidth="0" strokeLinecap="square" strokeLinejoin="bevel" letterSpacing="0" wordSpacing="0"
              style={{textAlign: "start", textAlignLast: "auto", fontFamily: "High Tower Text", fontSize: 40}}>
          <tspan x="0">eramics</tspan>
        </text>
      </svg>

    </div>
  );
};

export default Brand;
// <img src="/uniq-logo-100x99.png" width="75px" height="75px" alt="uniQCeramics"></img>
