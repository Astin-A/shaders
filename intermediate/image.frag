#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_tex0;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    float color = 0.0;

    gl_FragColor = texture2D(u_tex0, coord);
}