//ここの数字を調整してみる
let moveX = -320
let moveY = -200
let targetRotation = 130
let targetScale = 1

const originX = 700
const originY = 700
let x = originX
let y = originY
let rotationVal = 0
let scaleVal = 1

const targetX = originX + moveX
const targetY = originY + moveY
const ease = 0.1

let peace
let peaces

function preload() {
  peaces = loadImage('images/puzzle2.png');
  peace = loadImage('images/puzzle1.png');
}

function setup() {
  createCanvas(1200, 1200);
  imageMode(CENTER);
  angleMode(DEGREES);
  rectMode(CENTER);
  image(peaces, 500, 500);
  image(peace, x, y);
}

//イージング処理
function easeFn(src, dst) {
  const d = dst - src
  return d * ease
}

function draw() {

  //動かす位置を決める
  x += easeFn(x, targetX)
  y += easeFn(y, targetY)
  //回転・スケールの設定
  rotationVal += easeFn(rotationVal, targetRotation)
  scaleVal += easeFn(scaleVal, targetScale)

  //背景を描画
  background(244)
  //パズルを描画
  image(peaces, 500, 500);

  //現在の原点を保存
  push()
  //原点をピース中心にしてから
  translate(x, y)
  //回転
  rotate(rotationVal)
  //スケーリング
  scale(scaleVal)
  //原点へ移動
  image(peace, 0, 0);
  pop()//保存しておいた原点の呼び出し

}