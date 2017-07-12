function Level (){
  this.sprites = [];
  this.shots = [];
  this.tresspass = [];
  this.initialx = [590, 790, 990, 1190, 1390, 1590];
  this.inimigos = 6;
  this.dificulty = 0;
  this.score = 0;
  this.range = 130;
  this.espaco = 80;
}

Level.prototype.init = function () {
  var last_x = 290;
  var range_x = 0;
  for (var i = 0; i < this.inimigos; i++) {
    var superior = new Sprite();
    var inferior = new Sprite();
    inferior.vx = -120;
    superior.vx = inferior.vx;
    inferior.width = 80;
    inferior.height = 400;
    superior.width = 80;
    superior.height = 400;
    //inferior.x = ((Math.random() * (range_x) + (last_x + range_x)));
    inferior.x = this.initialx[i];
    inferior.y = ((Math.random() * (300 - this.espaco) + this.espaco));
    last_x = inferior.x;
    range_x = 130;
    superior.x = inferior.x;
    superior.y = inferior.y - inferior.height - this.espaco;
    this.sprites.push(inferior);
    this.sprites.push(superior);
    this.tresspass[i] = 0;
    this.initialx[i] = inferior.x;
  }
};

Level.prototype.mover = function (dt) {
    for (var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].mover(dt);
    }
};

Level.prototype.moverAng = function (dt) {
    for (var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].moverAng(dt);
    }
};

Level.prototype.desenhar = function (ctx) {
    for (var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].desenhar(ctx);
    }
};
Level.prototype.desenharImg = function (ctx) {
    for (var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].desenharImg(ctx, this.imageLib.images[this.sprites[i].imgkey]);
    }
};

Level.prototype.colidiuCom = function (alvo, resolveColisao) {
    for (var i = 0; i < this.sprites.length; i++) {
      if(this.sprites[i].colidiuCom(alvo)){
        resolveColisao(this.sprites[i], alvo);
      }
    }
};

Level.prototype.perseguir = function (alvo, dt) {
  for (var i = 0; i < this.sprites.length; i++) {
    this.sprites[i].perseguir(alvo,dt);
  }
};
Level.prototype.perseguirAng = function (alvo, dt) {
  for (var i = 0; i < this.sprites.length; i++) {
    this.sprites[i].perseguirAng(alvo,dt);
  }
};

//
