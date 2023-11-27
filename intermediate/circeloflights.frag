#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    vec2 translate = vec2(-0.5,-0.5);
    coord += translate;

    for(int i = 0; i < 20; i++) {
        float radias = 0.3;
        float rad = radians(360.0 / 20.0) * float(i);

        color += 0.003 / length(coord + vec2(radias * cos(rad), radias * sin(rad)));
}

    gl_FragColor = vec4(color, 1.0);
}