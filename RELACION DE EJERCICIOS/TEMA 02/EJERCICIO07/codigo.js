var vec=[];  
  var f;
  for(f=0;f<10;f++)
  {
    vec[f]=parseInt(Math.random()*1001);
  }
  document.write('Vector original<br>');
  for(f=0;f<vec.length;f++)
  {
    document.write(vec[f]+', ');
  }
  document.write('<p>');
  var menor=vec[0];
  var pos=0;
  for(f=1;f<vec.length;f++)
  {
    if (vec[f]<menor)
    {
      menor=vec[f];
      pos=f;
    }
  }
  document.write('Elemento menor del vector: ' + menor);
  document.write('<p>');
  var vec2=vec.slice(pos);
  document.write('Vector resultante de la llamada a slice<br>');
  for(f=0;f<vec2.length;f++)
  {
    document.write(vec2[f]+', ');
  }