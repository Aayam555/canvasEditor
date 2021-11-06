function regularPolygon(n, l, a, b){
  function coordinate(m){
      if (a == null && b == null){
        return {"x": (l*Math.sin((2*Math.PI*(m - 1))/n)/(2*Math.sin(Math.PI/n))+canvas.width/2),
                "y": (l*Math.cos((2*Math.PI*(m - 1))/n)/(2*Math.sin(Math.PI/n))+canvas.height/2)}
      } else{
        return {"x": (l*Math.sin((2*Math.PI*(m - 1))/n)/(2*Math.sin(Math.PI/n))+a),
                "y": (l*Math.cos((2*Math.PI*(m - 1))/n)/(2*Math.sin(Math.PI/n))+b)}
      }
    }
  for (let numberOfSides = 1; numberOfSides <= n; numberOfSides++){
    ctx.moveTo(coordinate(numberOfSides)["x"], coordinate(numberOfSides)["y"]);
    ctx.lineTo(coordinate(numberOfSides + 1)["x"], coordinate(numberOfSides + 1)["y"]);
    ctx.stroke();
  }
}
