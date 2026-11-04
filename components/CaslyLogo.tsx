import React from 'react';

export const CASLY_LOGO_PATH =
  'M 27 2 L 47 2 L 48 3 L 48 15 L 47 15 L 47 17 L 45 17 L 43 15 L 31 15 L 23 21 L 23 23 L 20 27 L 20 31 L 19 31 L 19 50 L 21 53 L 21 56 L 23 57 L 23 59 L 27 63 L 29 63 L 31 65 L 43 65 L 43 64 L 47 63 L 46 78 L 34 79 L 34 78 L 26 78 L 22 75 L 19 75 L 10 67 L 10 65 L 8 64 L 8 62 L 6 60 L 5 54 L 4 54 L 3 30 L 4 30 L 4 26 L 5 26 L 5 23 L 7 21 L 7 18 L 15 8 L 17 8 L 18 6 L 20 6 L 24 3 L 27 3 Z M 143 3 L 154 4 L 154 5 L 157 5 L 157 6 L 164 8 L 171 15 L 173 23 L 174 23 L 174 28 L 159 28 L 158 22 L 154 18 L 151 18 L 151 17 L 143 16 L 143 17 L 135 18 L 131 23 L 131 28 L 135 32 L 144 34 L 144 36 L 142 38 L 142 41 L 141 41 L 139 47 L 130 46 L 120 39 L 120 37 L 118 35 L 118 31 L 117 31 L 117 22 L 118 22 L 120 14 L 126 8 L 128 8 L 129 6 L 132 6 L 132 5 L 143 4 Z M 75 5 L 93 5 L 93 7 L 95 9 L 95 13 L 97 15 L 97 18 L 99 20 L 99 24 L 100 24 L 100 27 L 102 29 L 104 38 L 105 38 L 106 43 L 107 43 L 107 47 L 108 47 L 109 52 L 111 54 L 111 58 L 112 58 L 112 61 L 114 63 L 115 69 L 116 69 L 116 72 L 117 72 L 119 78 L 102 78 L 100 71 L 99 71 L 98 63 L 95 59 L 94 51 L 92 49 L 91 42 L 90 42 L 89 36 L 87 34 L 87 30 L 86 30 L 84 22 L 83 22 L 83 26 L 82 26 L 82 29 L 80 31 L 79 38 L 78 38 L 78 41 L 76 43 L 73 55 L 72 55 L 72 59 L 70 62 L 66 77 L 65 78 L 49 78 Z M 211 6 L 228 6 L 229 7 L 229 9 L 230 9 L 230 11 L 235 19 L 235 22 L 238 26 L 230 41 L 227 39 L 222 27 L 220 26 L 217 18 L 215 17 L 215 15 L 211 9 Z M 259 6 L 269 6 L 269 7 L 276 7 L 276 8 L 275 8 L 274 12 L 272 13 L 268 23 L 266 24 L 262 34 L 260 35 L 255 47 L 253 48 L 253 50 L 251 52 L 251 81 L 235 81 L 235 54 L 236 54 L 241 42 L 243 41 L 245 34 L 246 34 L 246 32 L 251 24 L 251 21 L 252 21 Z M 180 7 L 195 7 L 195 57 L 194 58 L 180 58 L 179 57 L 179 13 L 180 13 Z M 154 38 L 162 38 L 162 39 L 170 42 L 173 45 L 173 47 L 175 48 L 176 64 L 175 64 L 175 67 L 172 70 L 172 72 L 168 76 L 166 76 L 165 78 L 162 78 L 160 80 L 156 80 L 156 81 L 148 81 L 148 82 L 137 81 L 137 80 L 133 80 L 133 79 L 126 77 L 119 70 L 117 63 L 116 63 L 116 57 L 131 57 L 132 63 L 136 67 L 142 68 L 142 69 L 151 69 L 151 68 L 155 68 L 155 67 L 160 65 L 160 63 L 161 63 L 160 54 L 149 50 Z M 181 67 L 231 67 L 231 81 L 180 81 L 179 80 L 179 68 L 181 68 Z';

interface CaslyLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const CaslyLogo: React.FC<CaslyLogoProps> = ({ className = 'h-7 w-auto', ...props }) => {
  return (
    <svg
      viewBox='0 0 278 84'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      shapeRendering='geometricPrecision'
      {...props}
    >
      <path fillRule='evenodd' d={CASLY_LOGO_PATH} />
    </svg>
  );
};

export const CaslyBadge: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => {
  return (
    <div className={'relative rounded-full overflow-hidden shrink-0 ' + className}>
      <img src='/icon.png' alt='CASLY' className='w-full h-full object-contain' />
    </div>
  );
};
