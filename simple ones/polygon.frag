#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.14159265359;

uniform vec2 u_resolution;

float polygonshape(vec2 position, float radias, float sides){
    position = position * 2.0 - 1.0;
    float angel = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;

    return step(radias, cos(floor(0.5 + angel / slice) * slice - angel) * length(position));
}


void main(){
    vec2 position = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);
    float polygon = polygonshape(position, 0.6, 5.5);
    color = vec3(polygon);

    gl_FragColor = vec4(color, 1.0);
}