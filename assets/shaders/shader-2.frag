#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec4 colorForDistance(in float dist) {
    const float pi = 3.14159;

    float shade = 1.0 / (dist + 1.0);
    float modulator = pow(dist, 1.35);

    float red = clamp(abs(sin(modulator * shade - 0.25*pi)), 0.0, 1.0);
    float green = clamp(abs(sin(modulator * shade - 0.525*pi)), 0.0, 1.5);
    float blue = clamp(abs(sin(modulator * shade - 0.75*pi)), 0.0, 1.0);

    return vec4(red, green, blue, 1.50);
}

void main() {
	vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  
  float time = 100.1*u_time;
  float dist = distance(gl_FragCoord.xy, u_resolution.xy/2.0) + time + 3.0;
	
  gl_FragColor = colorForDistance(dist);
}