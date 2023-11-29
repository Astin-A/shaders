#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float randon2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(){
    vec2 coord = gl_FragCoord.xy * 0.03;
    coord -= u_time + vec2(sin(coord.y), cos(coord.x));

    float rand01 = fract(randon2d(floor(coord)) + u_time / 60.0);
    float rand02 = fract(randon2d(floor(coord)) + u_time / 40.0);

    rand01 *= 0.4 - length(fract(coord));

    gl_FragColor = vec4(0.0, rand01 * 4.0, rand02 * rand01 * 4.0, 1.0);
}