#ifdef GL_ES
precision mediump float;
#endif


uniform float u_time;
uniform vec2 u_resolution;


void main(){
    vec2 coord = (gl_FragCoord.xy / u_resolution.xy);
    float color = 0.0;

    color += sin(coord.y * 90.0 + sin(u_time + coord.y/10.0 * 50.0 + cos(coord.x) * 30.0 + u_time)) * 0.5;
    color += sin(coord.y * 60.0 + sin(u_time + coord.y/5.0 * 5.0 + cos(coord.x) * 3.0 + u_time)) * 0.5;
    gl_FragColor = vec4(vec3(cos(color  + coord.x + u_time*2.0), color, coord.y/100.0), 1.0);
}