// QWERTY Graph

class Key {
	constructor(key, nbg = []) {
		this.key = key
		this.nbg = nbg
	}
}

let keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
			"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let a = new Key("a")
let b = new Key("b")
let c = new Key("c")
let d = new Key("d")
let e = new Key("e")
let f = new Key("f")
let g = new Key("g")
let h = new Key("h")
let i = new Key("i")
let j = new Key("j")
let k = new Key("k")
let l = new Key("l")
let m = new Key("m")
let n = new Key("n")
let o = new Key("o")
let p = new Key("p")
let q = new Key("q")
let r = new Key("r")
let s = new Key("s")
let t = new Key("t")
let u = new Key("u")
let v = new Key("v")
let w = new Key("w")
let x = new Key("x")
let y = new Key("y")
let z = new Key("z")

a.nbg = [q, w, s, x, z]
b.nbg = [v, g, h, n]
c.nbg = [x, d, f, v]
d.nbg = [s, e, r, f, c, x]
e.nbg = [w, s, d, r]
f.nbg = [d, r, t, g, v, c]
g.nbg = [f, t, y, h, b, v]
h.nbg = [g, y, u, j, n, b]
i.nbg = [u, j, k, o]
j.nbg = [h, u, i, k, m, n]
k.nbg = [j, i, o, l, m]
l.nbg = [k, o, p]
m.nbg = [n, j, k]
n.nbg = [b, h, j, m]
o.nbg = [i, k, l, p]
p.nbg = [o, l]
q.nbg = [a, w]
r.nbg = [e, d, f, t]
s.nbg = [a, w, e, d, x, z]
t.nbg = [r, f, g, y]
u.nbg = [y, h, j, i]
v.nbg = [c, f, g, b]
w.nbg = [q, a, s, e]
x.nbg = [z, s, d, c]
y.nbg = [t, g, h, u]
z.nbg = [a, s, x]


function randomChain(startKey, limit) { 
    let counter = 0
    let currentKey = start
  
    while (counter < limit) {
      counter++;
      document.write(currentKey.key)

      let randomIndex = Math.floor(Math.random() * currentKey.nbg.length)
      currentKey = currentKey.nbg[randomIndex]
    }
}
