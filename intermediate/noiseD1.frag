#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

float noise1D(float value){
    return cos(value + cos(value * 90.0) * 100.0) * 0.5 + 0.5;
}

void main(){
    vec2 coord = gl_FragCoord.xy;
    vec3 color = vec3(0.0);

    color.r += noise1D(u_time);

    gl_FragColor = vec4(color, 1.0);
}