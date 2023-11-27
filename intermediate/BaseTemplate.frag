#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    float color = 0.0;

    gl_FragColor = vec4(vec3(color,color,color), 1.0);
}