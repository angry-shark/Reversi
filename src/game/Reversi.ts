class Reversi extends egret.Sprite{
	//颜色的数组0黑1白2红3蓝
	private _color:Array<number>=[0x000000,0xffffff,0xff0000,0x0000ff];
	//选择第几个颜色
	private currencolor:number=2;
	public constructor() {
		super();
		this.init();
	}
	private init(){
		this.touchEnabled=true;
		for(var i:number=0;i<4;i++){
			this.currencolor=i;
			this.draw(i*160,0);
		}
	}
	private draw(x,y){
		this.width=160;
		this.height=160;
		this.graphics.lineStyle(1,0x000000);
		this.graphics.beginFill(this._color[this.currencolor]);
		this.graphics.drawRect(x,y,160,160);
		this.graphics.endFill();
	}
}