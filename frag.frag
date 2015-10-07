precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform float mode;

#define PI 3.14159265

float expCurve( float _in, float _lv ){
  return sign( 0.5 - _in ) * ( exp( -abs( _in - 0.5 ) * _lv ) - 1.0 ) * 0.5 + 0.5;
}

vec3 catColor( float _t ){
  return vec3(
    cos( _t ),
    cos( _t + PI / 3.0 * 4.0 ),
    cos( _t + PI / 3.0 * 2.0 )
  ) * 0.5 + 0.5;
}

void main(){
  float badTime = floor( time * 6.0 + gl_FragCoord.y * 0.001 );
  vec4 col = vec4( 0.0 );

  if( mode == 0.0 ){
    float phase = length( ( gl_FragCoord.x + gl_FragCoord.y ) / resolution.y * 64.0 ) - badTime;
    col = mix(
      vec4( 1.0, 0.0, 0.0, 1.0 ),
      vec4( 0.0, 0.0, 1.0, 1.0 ),
      expCurve( sin( phase ) + 0.5, 60.0 )
    );
  }else if( mode <= 3.0 ){
    vec2 p = gl_FragCoord.xy - resolution / 2.0;
    float phase = atan( p.y, p.x ) * 24.0 + length( p ) * 0.01 + badTime;
    col = mix(
      vec4( 1.0, 0.0, 1.0, 1.0 ),
      vec4( 0.0, 1.0, 0.0, 1.0 ),
      expCurve( sin( phase ) + 0.5, 60.0 )
    );
  }else{
    vec2 p = gl_FragCoord.xy - resolution / 2.0;
    float phase = length( floor( p / resolution.y * 32.0 + 0.5 ) ) - badTime;
    col = vec4( catColor( phase ), 1.0 );
  }

  gl_FragColor = col;
}
