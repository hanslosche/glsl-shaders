#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec2 translate = vec2(-0.5, -0.5);
    coord += translate;

    const int sides = 20;
    for(int i=0; i< sides; i++){
        float radius = sin(u_time) * 0.5;
        float rad = radians(360.0 / float(sides)) * float(i);
       color +=  0.002 / length(coord + vec2(radius * cos(rad), radius * sin(rad)));
    }

    
    gl_FragColor = vec4(color, 1.0);
}