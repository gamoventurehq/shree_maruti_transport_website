import { useId } from 'react';

type TankerCutoutProps = {
  className?: string;
  wheelClassName?: string;
  source?: string;
};

const wheels = [
  { x: 202, y: 763, rx: 18, ry: 42 },
  { x: 275, y: 770, rx: 23, ry: 45 },
  { x: 387, y: 789, rx: 28, ry: 48 },
  { x: 730, y: 861, rx: 56, ry: 84 },
];

const rimDetailAngles = [0, 45, 90, 135, 180, 225, 270, 315];

export function TankerCutout({
  className,
  wheelClassName,
  source = '/hero/tanker.webp',
}: TankerCutoutProps) {
  const id = useId();
  const photoId = `${id}-photo`;
  const silhouetteId = `${id}-silhouette`;
  const rimEdgeId = `${id}-rim-edge`;
  const rimFaceId = `${id}-rim-face`;
  const hubId = `${id}-hub`;

  return (
    <svg
      className={className}
      viewBox="0 0 1536 1024"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <image id={photoId} href={source} width="1536" height="1024" />
        <clipPath id={silhouetteId} clipPathUnits="userSpaceOnUse">
          <path d="M679 193L945 73Q1104 68 1269 140L1268 194L1299 218L1305 248L1303 277L1301 301L1290 300L1308 360L1324 450L1340 475L1345 713L1382 720L1383 800L1367 804L1362 835L1376 854L1383 857L1383 888L948 931L947 894L916 901L875 896L847 805L797 799L780 713L771 673Q766 636 748 633L680 633L642 739L631 848L601 849L459 819L416 757L412 695Q406 648 382 646L201 647Q185 648 180 674L165 738L124 734L128 696L104 696L105 679L129 677L133 632Q109 610 110 565Q106 494 132 457Q143 438 166 426L576 268L620 253L675 239Z" />
          <path d="M832 274L841 245L847 244L847 274L839 276L836 306L849 307L849 352L838 354L839 396L852 403L856 430L848 438L837 435L827 420L816 413L801 409Q792 407 791 395L793 366Q794 355 806 353L805 350L800 350Q788 348 788 335L786 290Q787 273 800 274L816 273L815 259L822 251L825 250L825 275ZM824 263L821 274L826 274L829 258Z" />
          <path d="M1289 319L1317 319Q1327 321 1330 337L1332 354L1338 357L1338 379L1342 410L1340 430L1345 433L1347 452L1340 460L1330 461L1328 449L1323 439L1321 394L1310 386L1308 364L1313 355L1325 355L1323 337Q1321 324 1314 325L1290 325Z" />
          <path d="M1349 474Q1349 467 1355 466L1358 461L1361 467Q1365 468 1365 475L1360 476L1361 714L1354 714L1354 477Z" />
          <path d="M1311 247Q1317 249 1317 259L1314 273L1307 287L1307 264Z" />
          <path d="M202 681Q231 676 251 704L263 757L259 810L246 838Q238 846 214 846Q193 846 184 827Q175 807 175 769Q175 721 188 693Q193 684 202 681Z" />
          <path d="M271 686Q309 679 337 701Q353 721 359 759L357 810Q352 844 333 856L302 862Q274 866 262 846Q247 824 246 783Q244 741 256 706Q262 691 271 686Z" />
          <path d="M382 696Q418 688 447 710Q472 735 481 778L483 821Q478 859 455 875L414 885Q390 890 376 876Q358 857 355 819Q351 776 361 733Q367 707 382 696Z" />
          <path d="M722 721Q751 708 781 724Q815 742 837 783Q857 818 868 866L870 909Q868 947 843 971Q818 993 771 995Q729 995 706 978Q677 957 664 914Q651 868 662 811Q671 760 697 734Q708 725 722 721Z" />
          <path d="M1080 917L1247 903Q1239 932 1214 945Q1181 960 1143 951Q1104 946 1080 917Z" />
          <path d="M634 811L654 810L658 909L631 914Z" />
          <path d="M119 731L169 740L167 753L118 745Z" />
          <path d="M196 409L203 402L217 398L222 402L202 409ZM253 388L255 382L274 374L281 377L282 381L275 378L259 385L258 389ZM333 357L337 352L361 344L368 348L369 352L363 348L339 355L337 359ZM426 324L428 318L462 307L468 311L470 315L463 311L432 322L431 326ZM555 274L557 263L607 247Q615 244 620 253L616 256Q614 250 608 252L562 268L560 275Z" />
        </clipPath>
        <linearGradient id={rimEdgeId} x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0" stopColor="#7c8184" />
          <stop offset="0.22" stopColor="#303638" />
          <stop offset="0.6" stopColor="#111516" />
          <stop offset="1" stopColor="#464c4f" />
        </linearGradient>
        <radialGradient id={rimFaceId} cx="34%" cy="24%" r="82%">
          <stop offset="0" stopColor="#3b3e40" />
          <stop offset="0.45" stopColor="#232628" />
          <stop offset="1" stopColor="#101314" />
        </radialGradient>
        <linearGradient id={hubId} x1="15%" y1="0%" x2="80%" y2="100%">
          <stop offset="0" stopColor="#565d61" />
          <stop offset="0.36" stopColor="#30373b" />
          <stop offset="1" stopColor="#141a1d" />
        </linearGradient>
      </defs>

      <use href={`#${photoId}`} clipPath={`url(#${silhouetteId})`} />

      {wheels.map(({ x, y, rx, ry }) => (
        <g
          key={x}
          transform={`translate(${x} ${y}) scale(${rx / 100} ${ry / 100})`}
        >
          <circle r="100" fill={`url(#${rimEdgeId})`} />
          <circle r="94" fill="#111516" />
          <circle r="89" fill={`url(#${rimFaceId})`} />
          <circle r="82" fill="none" stroke="#101314" strokeWidth="2" />
          <g className={wheelClassName} style={{ transformOrigin: '0px 0px' }}>
            {rimDetailAngles.map((angle) => (
              <g key={angle} transform={`rotate(${angle})`}>
                <ellipse
                  cy="-66"
                  rx="8"
                  ry="14"
                  fill="#0a0d0f"
                  stroke="#515b60"
                  strokeOpacity="0.4"
                  strokeWidth="1.5"
                />
                <circle
                  cy="-42"
                  r="5.5"
                  fill="#737d82"
                  stroke="#101314"
                  strokeWidth="2.5"
                />
              </g>
            ))}
          </g>
          <circle r="30" fill="#141a1d" stroke="#596267" strokeWidth="1.5" />
          <circle r="24" fill={`url(#${hubId})`} />
          <circle r="12" fill="#252b2e" stroke="#606c72" strokeWidth="1.5" />
          <path
            d="M-74-60A96 96 0 0 1 32-91"
            fill="none"
            stroke="#d4dbe0"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  );
}
