//This is just initial version 
const width = 125;
const height = 125;
const size = 50;
const r = bt.randInRange
const t = new bt.Turtle()

setDocDimensions(width,height);

/*drawLines([
    [[50,40],[50,125],[4,67],[125/2,67]]
])*/
const shape = (n,size,position) => {
  const t = new bt.Turtle()
  t.forward(position)
  for(let i = 0;i<n;i++)
    t.forward(size).left(360/n)
    return t.lines()
}

drawLines(shape(r(1,100),2,125/2))
drawLines(shape(r(1,100),2,125/2))