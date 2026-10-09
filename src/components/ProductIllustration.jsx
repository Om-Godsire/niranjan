import React from 'react';

/**
 * Hand-drawn black-outline illustrations for Niranjan's Birthday Shop.
 * Designed with consistent black strokes (2.5 - 3px), rounded caps, and charming scrapbook details.
 * Strictly black outline on transparent/cream background as specified.
 */
export default function ProductIllustration({ productId, className = "w-48 h-48", strokeWidth = 2.5 }) {
  const stroke = "#18181B"; // Dark ink black

  switch (productId) {
    case "skin-care":
      // Face Mask Packet and Oil Absorption Roller Stick
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} transition-transform duration-300`}
        >
          {/* Decorative doodle sparkles */}
          <path d="M30 40 L30 50 M25 45 L35 45" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M175 130 L175 140 M170 135 L180 135" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <circle cx="165" cy="45" r="2" fill={stroke} />

          {/* Sheet Mask Packet (angled slightly) */}
          <g transform="rotate(-6 85 105)">
            {/* Main Pouch */}
            <rect
              x="42"
              y="38"
              width="80"
              height="115"
              rx="8"
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            {/* Top Seal & Tear notches */}
            <line x1="42" y1="52" x2="122" y2="52" stroke={stroke} strokeWidth="2" strokeDasharray="3 3" />
            <path d="M42 46 L47 46 L42 50" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M122 46 L117 46 L122 50" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
            
            {/* Pouch Art: Sheet Mask Face outline */}
            <ellipse cx="82" cy="85" rx="22" ry="25" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
            {/* Eyes */}
            <circle cx="74" cy="82" r="3" stroke={stroke} strokeWidth="2" />
            <circle cx="90" cy="82" r="3" stroke={stroke} strokeWidth="2" />
            {/* Mouth */}
            <path d="M78 95 Q82 98 86 95" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            
            {/* Packet Label text doodle */}
            <line x1="58" y1="120" x2="106" y2="120" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="66" y1="128" x2="98" y2="128" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <line x1="72" y1="135" x2="92" y2="135" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Slim Oil Absorption Roller Stick */}
          <g transform="rotate(12 135 110)">
            {/* Cap / Roller Head */}
            <rect
              x="125"
              y="40"
              width="24"
              height="30"
              rx="5"
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            {/* Roller ball peeking */}
            <ellipse cx="137" cy="40" rx="9" ry="6" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M131 38 Q137 42 143 38" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />

            {/* Main Roller Body */}
            <rect
              x="123"
              y="70"
              width="28"
              height="80"
              rx="6"
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            {/* Grip lines */}
            <line x1="126" y1="84" x2="148" y2="84" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <line x1="126" y1="90" x2="148" y2="90" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <line x1="126" y1="96" x2="148" y2="96" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            
            {/* Minimal label on stick */}
            <rect x="129" y="108" width="16" height="28" rx="2" stroke={stroke} strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="133" y1="118" x2="141" y2="118" stroke={stroke} strokeWidth="1.5" />
            <line x1="133" y1="124" x2="141" y2="124" stroke={stroke} strokeWidth="1.5" />
          </g>

          {/* Droplet and shine doodles */}
          <path d="M115 25 Q118 20 120 25 Q123 32 118 35 Q112 32 115 25 Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
          <path d="M102 36 L106 38" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "fitness":
      // Gym Duffel Bag
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} transition-transform duration-300`}
        >
          {/* Little energy / sweat doodles */}
          <path d="M25 60 L35 65" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M165 50 L175 60" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M172 40 L182 45" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

          {/* Shoulder Strap arching over */}
          <path
            d="M50 100 C 50 40, 150 40, 150 100"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Shoulder pad on strap */}
          <rect
            x="82"
            y="44"
            width="36"
            height="14"
            rx="4"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <line x1="88" y1="51" x2="112" y2="51" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />

          {/* Carry Handles */}
          <path
            d="M70 105 C 70 65, 130 65, 130 105"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Handle velcro grip */}
          <rect
            x="88"
            y="65"
            width="24"
            height="12"
            rx="3"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />

          {/* Main Duffel Body */}
          <rect
            x="38"
            y="95"
            width="124"
            height="62"
            rx="24"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />

          {/* Zipper top track */}
          <path d="M48 106 L152 106" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
          <rect x="96" y="103" width="8" height="6" rx="1.5" stroke={stroke} strokeWidth="2" />
          <line x1="100" y1="109" x2="100" y2="115" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

          {/* Side circular zip pocket end */}
          <path d="M52 98 C42 108 42 140 52 152" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M148 98 C158 108 158 140 148 152" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Front pocket with stylish stitch stripe */}
          <path d="M68 116 L132 116 L128 146 L72 146 Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
          <path d="M68 126 L132 126" stroke={stroke} strokeWidth="1.5" strokeDasharray="3 3" />
          
          {/* Dumbbell icon on pocket */}
          <line x1="90" y1="136" x2="110" y2="136" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <rect x="87" y="132" width="4" height="8" rx="1" stroke={stroke} strokeWidth="1.8" />
          <rect x="109" y="132" width="4" height="8" rx="1" stroke={stroke} strokeWidth="1.8" />
        </svg>
      );

    case "footwear":
      // Sneaker Shoes
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} transition-transform duration-300`}
        >
          {/* Speed / motion lines */}
          <path d="M20 145 L32 145" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M16 155 L28 155" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M165 70 L175 65" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M170 82 L180 80" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

          {/* Background Shoe silhouette (subtle 3D pairing) */}
          <g transform="translate(18, -14) scale(0.92)" opacity="0.6">
            <path
              d="M35 130 C35 90, 75 75, 95 85 L125 105 C145 110, 168 122, 168 142 L35 142 Z"
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            <rect x="30" y="142" width="142" height="15" rx="5" stroke={stroke} strokeWidth={strokeWidth} />
          </g>

          {/* Foreground Sneaker */}
          <g>
            {/* Sole */}
            <path
              d="M32 145 C40 144, 150 144, 168 145 C174 145, 178 152, 172 158 C160 162, 45 162, 30 158 C26 152, 28 145, 32 145 Z"
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            {/* Grip lines on sole */}
            <line x1="45" y1="152" x2="60" y2="152" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <line x1="75" y1="152" x2="95" y2="152" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <line x1="110" y1="152" x2="135" y2="152" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <line x1="145" y1="152" x2="160" y2="152" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

            {/* Upper Shoe Profile */}
            <path
              d="M34 145 C32 125, 34 98, 48 88 C55 82, 68 85, 78 95 L95 108 C115 112, 145 125, 162 135 C168 139, 170 144, 168 145"
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Collar & Tongue */}
            <path d="M48 88 C54 84, 62 84, 68 88" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M68 88 C70 80, 80 75, 86 85" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />

            {/* Heel pull tab */}
            <path d="M42 87 C40 76, 36 78, 38 90" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

            {/* Lacing eyelet stays and laces */}
            <line x1="76" y1="94" x2="88" y2="98" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="82" y1="102" x2="96" y2="106" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="88" y1="110" x2="104" y2="114" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="94" y1="118" x2="112" y2="122" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />

            {/* Tied shoelace loops */}
            <path d="M80 88 C70 82, 65 92, 75 96" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M84 88 C94 80, 100 90, 88 96" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

            {/* Side styling sweep / wave */}
            <path
              d="M48 132 C75 130, 95 120, 145 138"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 2"
            />
            <path
              d="M58 138 C80 136, 110 128, 155 142"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Toe cap stitch */}
            <path d="M138 144 C145 132, 156 135, 166 142" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "digital-detox":
      // LEGO Interlocking Brick Construction
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} transition-transform duration-300`}
        >
          {/* Sparkles / brick click sounds */}
          <path d="M35 45 L45 45 M40 40 L40 50" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M165 50 L175 50 M170 45 L170 55" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <text x="145" y="100" fill={stroke} fontSize="14" fontWeight="bold" fontFamily="monospace">CLICK!</text>

          {/* Bottom Base Brick (Wide 4x2) */}
          <g>
            <rect x="35" y="130" width="130" height="38" rx="3" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Studs on base brick */}
            <rect x="45" y="122" width="18" height="8" rx="2" stroke={stroke} strokeWidth="2" />
            <rect x="75" y="122" width="18" height="8" rx="2" stroke={stroke} strokeWidth="2" />
            <rect x="107" y="122" width="18" height="8" rx="2" stroke={stroke} strokeWidth="2" />
            <rect x="137" y="122" width="18" height="8" rx="2" stroke={stroke} strokeWidth="2" />
            {/* Side depth line */}
            <line x1="35" y1="152" x2="165" y2="152" stroke={stroke} strokeWidth="1.5" strokeDasharray="3 3" />
          </g>

          {/* Middle Layer Brick 1 (Left 2x2) */}
          <g>
            <rect x="45" y="90" width="60" height="34" rx="3" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <rect x="53" y="82" width="18" height="8" rx="2" stroke={stroke} strokeWidth="2" />
            <rect x="79" y="82" width="18" height="8" rx="2" stroke={stroke} strokeWidth="2" />
          </g>

          {/* Middle Layer Brick 2 (Right angled 2x2) */}
          <g>
            <rect x="105" y="90" width="50" height="34" rx="3" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <rect x="113" y="82" width="16" height="8" rx="2" stroke={stroke} strokeWidth="2" />
            <rect x="133" y="82" width="16" height="8" rx="2" stroke={stroke} strokeWidth="2" />
          </g>

          {/* Top Layer Tower Brick */}
          <g>
            <rect x="70" y="52" width="60" height="32" rx="3" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Studs */}
            <rect x="78" y="44" width="18" height="8" rx="2" stroke={stroke} strokeWidth="2" />
            <rect x="104" y="44" width="18" height="8" rx="2" stroke={stroke} strokeWidth="2" />
          </g>

          {/* Little flag / antenna on top brick */}
          <line x1="87" y1="44" x2="87" y2="22" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M87 22 L110 30 L87 38 Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );

    case "apparel":
      // Co-ord Set: Shirt & Matching Trousers
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} transition-transform duration-300`}
        >
          {/* Hanger / Style spark */}
          <path d="M30 45 L36 35" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M170 45 L164 35" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

          {/* Left/Top: Relaxed Camp Collar Shirt */}
          <g transform="translate(18, 25)">
            {/* Collar */}
            <path d="M28 20 L42 28 L36 10 Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
            <path d="M54 20 L40 28 L46 10 Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
            <path d="M36 10 C40 8, 42 8, 46 10" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

            {/* Left sleeve */}
            <path d="M28 15 L2 35 L12 48 L22 38" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Right sleeve */}
            <path d="M54 15 L80 35 L70 48 L60 38" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />

            {/* Shirt Body */}
            <path
              d="M22 38 L22 84 L60 84 L60 38"
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            {/* Front button placket */}
            <line x1="41" y1="28" x2="41" y2="84" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <circle cx="41" cy="40" r="1.8" fill={stroke} />
            <circle cx="41" cy="54" r="1.8" fill={stroke} />
            <circle cx="41" cy="68" r="1.8" fill={stroke} />

            {/* Chest Pocket */}
            <rect x="47" y="42" width="10" height="13" rx="1.5" stroke={stroke} strokeWidth="1.8" />

            {/* Curved bottom hem */}
            <path d="M22 84 Q41 88 60 84" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>

          {/* Right/Bottom: Matching Pleated Trousers */}
          <g transform="translate(105, 45)">
            {/* Waistband with drawstring */}
            <rect x="8" y="10" width="54" height="12" rx="3" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <line x1="35" y1="22" x2="32" y2="30" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <line x1="35" y1="22" x2="39" y2="31" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

            {/* Trouser legs */}
            <path
              d="M8 22 L14 116 L31 116 L35 55 L39 116 L56 116 L62 22 Z"
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />

            {/* Crease / Pleat lines */}
            <line x1="22" y1="28" x2="22" y2="110" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="48" y1="28" x2="48" y2="110" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Side pockets */}
            <path d="M12 28 L18 42" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M58 28 L52 42" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

            {/* Rolled cuffs */}
            <rect x="13" y="110" width="19" height="7" rx="1.5" stroke={stroke} strokeWidth="2" />
            <rect x="38" y="110" width="19" height="7" rx="1.5" stroke={stroke} strokeWidth="2" />
          </g>

          {/* Label tag doodle */}
          <rect x="22" y="132" width="32" height="18" rx="3" stroke={stroke} strokeWidth="1.8" strokeDasharray="2 2" />
          <text x="26" y="145" fill={stroke} fontSize="9" fontFamily="sans-serif" fontWeight="bold">MATCH</text>
        </svg>
      );

    case "winterwear":
      // Cozy Hoodie
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} transition-transform duration-300`}
        >
          {/* Snowflake / chilly vibes */}
          <path d="M28 35 L38 45 M38 35 L28 45" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M162 35 L172 45 M172 35 L162 45" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

          {/* Hood Arch */}
          <path
            d="M62 60 C62 20, 138 20, 138 60"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Inner hood opening */}
          <path
            d="M74 62 C74 34, 126 34, 126 62"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Shoulders & Sleeves */}
          <path
            d="M62 60 L24 85 L38 135 L58 122 L54 84"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M138 60 L176 85 L162 135 L142 122 L146 84"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />

          {/* Ribbed Wrist Cuffs */}
          <rect x="34" y="130" width="22" height="10" rx="3" transform="rotate(-28 34 130)" stroke={stroke} strokeWidth="2" />
          <rect x="144" y="122" width="22" height="10" rx="3" transform="rotate(28 144 122)" stroke={stroke} strokeWidth="2" />

          {/* Main Torso Body */}
          <path
            d="M54 84 L54 150 L146 150 L146 84 Z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />

          {/* Drawstrings hanging from hood */}
          <path d="M86 64 C84 80, 80 92, 82 104" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="82" cy="107" r="3" stroke={stroke} strokeWidth="2" />
          
          <path d="M114 64 C116 80, 120 92, 118 104" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="118" cy="107" r="3" stroke={stroke} strokeWidth="2" />

          {/* Kangaroo Front Pouch */}
          <path
            d="M66 116 L134 116 L138 148 L62 148 Z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          {/* Pocket hand entries */}
          <line x1="66" y1="116" x2="62" y2="136" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <line x1="134" y1="116" x2="138" y2="136" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

          {/* Bottom Hem Band with ribbing */}
          <rect x="52" y="150" width="96" height="14" rx="3" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
          <line x1="70" y1="152" x2="70" y2="162" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="85" y1="152" x2="85" y2="162" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="100" y1="152" x2="100" y2="162" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="115" y1="152" x2="115" y2="162" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="130" y1="152" x2="130" y2="162" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "car-accessories":
      // Batman Car Accessory (Dashboard Emblem / Diffuser / Mount)
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} transition-transform duration-300`}
        >
          {/* Gotham bats / stars in background */}
          <path d="M25 40 Q30 35 35 40 Q40 35 45 40 Q35 46 25 40 Z" stroke={stroke} strokeWidth="1.5" />
          <path d="M155 35 Q160 30 165 35 Q170 30 175 35 Q165 41 155 35 Z" stroke={stroke} strokeWidth="1.5" />

          {/* Car AC Vent Louvers (Context background) */}
          <g opacity="0.4">
            <line x1="20" y1="90" x2="180" y2="90" stroke={stroke} strokeWidth="2" strokeDasharray="6 6" />
            <line x1="20" y1="110" x2="180" y2="110" stroke={stroke} strokeWidth="2" strokeDasharray="6 6" />
            <line x1="20" y1="130" x2="180" y2="130" stroke={stroke} strokeWidth="2" strokeDasharray="6 6" />
          </g>

          {/* Mount Ring / Dashboard Base */}
          <ellipse cx="100" cy="110" rx="72" ry="58" stroke={stroke} strokeWidth={strokeWidth} strokeDasharray="6 3" />
          <ellipse cx="100" cy="110" rx="64" ry="50" stroke={stroke} strokeWidth="2" />

          {/* Vent clip / swivel stand at back */}
          <rect x="92" y="148" width="16" height="24" rx="4" stroke={stroke} strokeWidth={strokeWidth} />
          <line x1="96" y1="154" x2="96" y2="166" stroke={stroke} strokeWidth="2" />
          <line x1="104" y1="154" x2="104" y2="166" stroke={stroke} strokeWidth="2" />

          {/* Iconic Batman Emblem Silhouette (clean black outline) */}
          <path
            d="
              M 100 80
              C 102 74, 105 68, 107 68
              C 108 68, 110 74, 112 78
              C 124 72, 138 72, 150 78
              C 142 88, 138 98, 142 108
              C 148 112, 154 116, 162 118
              C 148 128, 132 130, 120 124
              C 112 134, 106 142, 100 148
              C 94 142, 88 134, 80 124
              C 68 130, 52 128, 38 118
              C 46 116, 52 112, 58 108
              C 62 98, 58 88, 50 78
              C 62 72, 76 72, 88 78
              C 90 74, 92 68, 93 68
              C 95 68, 98 74, 100 80
              Z
            "
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />

          {/* Inner Bat Wings details / Chiseled facets */}
          <path d="M80 92 L93 105 L100 95 L107 105 L120 92" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <line x1="100" y1="95" x2="100" y2="136" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M68 102 L90 114" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M132 102 L110 114" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />

          {/* Subtle fragrance aroma / soundwave rings */}
          <path d="M100 48 C115 48, 125 54, 130 58" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 3" />
          <path d="M100 40 C122 40, 140 48, 148 54" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
        </svg>
      );

    case "handmade":
      // Crochet item with yarn loops and hook
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} transition-transform duration-300`}
        >
          {/* Hearts / love sparkles */}
          <path d="M30 40 Q35 30 40 38 Q45 30 50 40 Q40 52 30 40 Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
          <path d="M165 145 Q170 138 175 144 Q180 138 185 145 Q175 155 165 145 Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />

          {/* Ball of Yarn */}
          <g transform="translate(110, 38)">
            <circle cx="34" cy="34" r="30" stroke={stroke} strokeWidth={strokeWidth} />
            {/* Yarn winding loops */}
            <path d="M14 24 C28 10, 48 16, 56 34" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M8 36 C18 48, 44 54, 58 40" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M20 54 C36 40, 52 24, 44 8" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M26 12 C40 28, 38 48, 22 60" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            
            {/* Loose trailing yarn strand */}
            <path
              d="M12 48 C -6 68, 10 92, -35 88"
              stroke={stroke}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>

          {/* Crochet Hook inserted gracefully */}
          <g transform="rotate(-36 85 105)">
            {/* Handle */}
            <rect x="75" y="10" width="12" height="95" rx="6" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="81" y1="25" x2="81" y2="85" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            {/* Grip rest */}
            <rect x="73" y="60" width="16" height="20" rx="3" stroke={stroke} strokeWidth="1.5" />
            
            {/* Metal shaft & Hook throat */}
            <rect x="78" y="105" width="6" height="45" stroke={stroke} strokeWidth={strokeWidth} />
            {/* Curved crochet hook head */}
            <path d="M78 150 C78 162, 86 160, 86 152 C86 146, 82 144, 82 144" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>

          {/* Handcrafted Crochet Granny Square Motif */}
          <g transform="translate(25, 95)">
            {/* Outer square with wavy stitches */}
            <rect x="10" y="10" width="75" height="75" rx="10" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Stitched looped border */}
            <rect x="16" y="16" width="63" height="63" rx="8" stroke={stroke} strokeWidth="1.8" strokeDasharray="4 3" />
            
            {/* Inner flower / rosette motif */}
            <circle cx="47" cy="47" r="16" stroke={stroke} strokeWidth={strokeWidth} />
            <circle cx="47" cy="47" r="8" stroke={stroke} strokeWidth="2" />
            
            {/* Petal loops */}
            <path d="M47 31 C40 24, 54 24, 47 31" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M47 63 C40 70, 54 70, 47 63" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M31 47 C24 40, 24 54, 31 47" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M63 47 C70 40, 70 54, 63 47" stroke={stroke} strokeWidth="2" strokeLinecap="round" />

            {/* Corner diagonal clusters */}
            <line x1="22" y1="22" x2="34" y2="34" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <line x1="72" y1="22" x2="60" y2="34" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <line x1="22" y1="72" x2="34" y2="60" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <line x1="72" y1="72" x2="60" y2="60" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "travel":
      // Suitcase with Travel Stickers, Passport, and Luggage Tags
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} transition-transform duration-300`}
        >
          {/* Airplane doodle flying */}
          <g transform="translate(138, 20) scale(0.8)">
            <path
              d="M10 20 L28 14 L42 22 L38 25 L28 20 L24 35 L20 36 L21 21 L12 22 L8 26 L6 26 Z"
              stroke={stroke}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Jet vapor trail */}
            <path d="M0 24 L6 23" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          </g>

          {/* Telescopic Trolley Handle */}
          <path d="M78 68 L78 30 C78 26, 122 26, 122 30 L122 68" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <rect x="74" y="24" width="52" height="10" rx="3" stroke={stroke} strokeWidth={strokeWidth} />
          {/* Handle release button */}
          <circle cx="100" cy="29" r="2" fill={stroke} />

          {/* Main Suitcase Body */}
          <rect
            x="42"
            y="65"
            width="116"
            height="95"
            rx="12"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />

          {/* Corner leather protectors with rivets */}
          {/* Top-left */}
          <path d="M42 80 C50 80, 56 74, 56 65" stroke={stroke} strokeWidth="2" />
          <circle cx="49" cy="72" r="1.5" fill={stroke} />
          {/* Top-right */}
          <path d="M158 80 C150 80, 144 74, 144 65" stroke={stroke} strokeWidth="2" />
          <circle cx="151" cy="72" r="1.5" fill={stroke} />
          {/* Bottom-left */}
          <path d="M42 145 C50 145, 56 151, 56 160" stroke={stroke} strokeWidth="2" />
          <circle cx="49" cy="153" r="1.5" fill={stroke} />
          {/* Bottom-right */}
          <path d="M158 145 C150 145, 144 151, 144 160" stroke={stroke} strokeWidth="2" />
          <circle cx="151" cy="153" r="1.5" fill={stroke} />

          {/* Center Ribbing bands / Straps */}
          <line x1="72" y1="65" x2="72" y2="160" stroke={stroke} strokeWidth="2" strokeDasharray="4 3" />
          <line x1="128" y1="65" x2="128" y2="160" stroke={stroke} strokeWidth="2" strokeDasharray="4 3" />

          {/* Suitcase Carry Handle */}
          <rect x="88" y="56" width="24" height="10" rx="3" stroke={stroke} strokeWidth="2" />

          {/* Luggage Tag attached to handle */}
          <g transform="rotate(18 115 62)">
            <line x1="110" y1="65" x2="114" y2="76" stroke={stroke} strokeWidth="1.5" />
            <path d="M110 76 L124 76 L128 94 L106 94 Z" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
            <circle cx="117" cy="80" r="1.5" fill={stroke} />
            <line x1="110" y1="86" x2="124" y2="86" stroke={stroke} strokeWidth="1.2" />
          </g>

          {/* Travel Stickers on suitcase */}
          {/* Round Stamp sticker */}
          <ellipse cx="64" cy="115" rx="14" ry="14" stroke={stroke} strokeWidth="1.8" strokeDasharray="3 2" />
          <text x="56" y="119" fill={stroke} fontSize="9" fontFamily="sans-serif" fontWeight="bold">AIR</text>
          
          {/* Star sticker */}
          <polygon points="100,102 103,110 111,110 105,115 107,123 100,118 93,123 95,115 89,110 97,110" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />

          {/* Passport Book Peeking */}
          <g transform="translate(118, 108) rotate(-10)">
            <rect x="0" y="0" width="26" height="36" rx="3" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
            <circle cx="13" cy="16" r="6" stroke={stroke} strokeWidth="1.5" />
            <text x="5" y="30" fill={stroke} fontSize="6" fontFamily="sans-serif" fontWeight="bold">PASS</text>
          </g>

          {/* Rolling spinner wheels */}
          <rect x="54" y="160" width="12" height="12" rx="4" stroke={stroke} strokeWidth={strokeWidth} />
          <rect x="134" y="160" width="12" height="12" rx="4" stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="60" cy="166" r="2.5" stroke={stroke} strokeWidth="1.5" />
          <circle cx="140" cy="166" r="2.5" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );

    default:
      return null;
  }
}
