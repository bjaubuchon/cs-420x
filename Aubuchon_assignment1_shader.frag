void main() {
  vec2 p = uv();
  vec2 p2 = uvN();
  float vert = 1.;
  float color = 0.; 
  float frequency = 2.;
  float gain = 0.5;
  float thickness = .05;
  
  if(vert >= 0.5) {
        p.x += (sin( p.y * frequency + 4. * time) * gain) * bands.a; 
        color += abs( thickness / p.x );
  } 
  if(vert <= 0.5) {
        p.y += (sin( p.x * frequency + 4. * time) * gain) * bands.a; 
        color += abs( thickness / p.y );
  }
  
  vec3 vecColor = vec3(color);
  
  gl_FragColor = vec4(vecColor, 1.);
}

/*


p = rotate(p, vec2(0., 0.), sin(1.* time) * 2.);
float c = circle(0., 0., 0.75, 0.5);
color += c;


*/

/*


float brightness = 1.5;
vec3 vBlue = blue * (1. - p2.y) * bands.r * brightness * 1.67 * noise(vec2(p.x * 2., p.y * 2.));
vec3 vOrange = orange * p2.y * bands.r * brightness * noise(vec2(p.x * 2., p.y * 2.));
vecColor -= green;
vecColor += vBlue;


vecColor += vOrange;


*/