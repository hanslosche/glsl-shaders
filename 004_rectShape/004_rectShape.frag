#ifdef GL_ES
precision mediump float;
#endif


uniform u_resolution;

float rectShape(vec2 position, float scale){
    scale = vec2(0.5) - scale * 0.5;
    
}


void main(){

    vec2 position = gl_FragCoord / u_resolution;
    vec3 color = vec3(0.0);
    float reactangle = rectShape( position, vec2(0.3));
    color = reactangle;

    gl_FragColor = vec4(color, 1.0);

}